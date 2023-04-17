import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../css/Login.module.css';
import logoUC from '../images/logoUC.png';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const credentials = [
    {
      email: 'admin@ultracar.com',
      password: 'admin',
    },
    {
      email: 'user1@ultracar.com',
      password: 'user1',
    },
    {
      email: 'user2@ultracar.com',
      password: 'user2',
    },
  ];

  useEffect(() => {
    localStorage.clear();
  });

  const handleClick = (e) => {
    e.preventDefault();

    const match = credentials.find((user) => user.email === email && user.password === password);

    if (match) {
      localStorage.setItem('loggedUser', JSON.stringify({ email }));
      history.push('/dashboard');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Header />
      <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
          <img src={logoUC} alt="ultracar logo" />
        </div>

        <hr />

        <div className={styles.loginBox}>
          <h1>Login</h1>
          <form>
            <label htmlFor="email-input">
              <p>E-mail</p>
              <input
                type="email"
                name="email"
                id="email-input"
                onChange={({ target: { value } }) => setEmail(value)}
                placeholder="user@mail.com"
              />
            </label>

            <label htmlFor="password-input">
              <p>Senha</p>
              <input
                type="password"
                name="password"
                id="password-input"
                onChange={({ target: { value } }) => setPassword(value)}
                placeholder="Sua senha"
              />
            </label>
          </form>

          <button
            type="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
