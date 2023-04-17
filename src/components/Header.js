import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../css/Header.module.css';
import logoUC from '../images/logoUC.png';
import profile from '../images/profile2.png';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('loggedUser'));
    if (get) setUser(get.email);
  }, []);

  const handleClick = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.ultracar}>
        <img src={logoUC} alt="ultracar-logo" />
      </div>
      {user && (
        <div className={styles.userBox}>
          <nav className={styles.hamburgerMenu}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <i className="fa fa-bars" />
            </button>
            <a href="dashboard">Inicio</a>
            <a href="clientes">Clientes</a>
            <a href="servicos">Ordem de serviços</a>
            <a href="veiculos">Veiculos</a>
          </nav>

          {isOpen && <HamburgerMenu />}

          <div className={styles.profileBox}>
            <img src={profile} alt="profile" />
            <p>{user}</p>
            <button
              onClick={handleClick}
              type="button"
            >
              Logout

            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
