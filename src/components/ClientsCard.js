import React, { useState } from 'react';

function ClientsCard() {
  const [clientInfo, setClientInfo] = useState({
    name: '',
    vehicle: '',
    model: '',
    cpf: '',
    rg: '',
    telefone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const submitNewClient = () => {
    // setAllClients([...allClients, clientInfo]);
    const storage = JSON.parse(localStorage.getItem('allClients')) || [];
    console.log(storage);
    // const newStorage = [{ ...storage, clientInfo }];
    storage.push(clientInfo);
    localStorage.setItem('allClients', JSON.stringify(storage));
  };

  return (
    <div>
      <p>Novo Cliente</p>
      <form>
        <label htmlFor="name">
          <span>Nome</span>
          <input
            id="name"
            name="name"
            onChange={handleInputChange}
            value={clientInfo.name}
          />
        </label>

        <label htmlFor="vehicle">
          <span>Veiculo</span>
          <input
            id="vehicle"
            name="vehicle"
            onChange={handleInputChange}
            value={clientInfo.vehicle}
          />
        </label>

        <label htmlFor="model">
          <span>Modelo</span>
          <input
            id="model"
            name="model"
            onChange={handleInputChange}
            value={clientInfo.model}
          />
        </label>

        <label htmlFor="cpf">
          <span>CPF</span>
          <input
            id="cpf"
            name="cpf"
            onChange={handleInputChange}
            value={clientInfo.cpf}
          />
        </label>

        <label htmlFor="rg">
          <span>RG</span>
          <input
            id="rg"
            name="rg"
            onChange={handleInputChange}
            value={clientInfo.rg}
          />
        </label>

        <label htmlFor="telefone">
          <span>Telefone</span>
          <input
            id="telefone"
            name="telefone"
            onChange={handleInputChange}
            value={clientInfo.telefone}
          />
        </label>

        <button
          type="button"
          onClick={submitNewClient}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default ClientsCard;
