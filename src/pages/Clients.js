import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import ClientsCard from '../components/ClientsCard';
import Header from '../components/Header';
import clients from '../services/clientsData';
import '../css/Clients.css';

function Clients() {
  const [allClientsUpdate, setAllClientsUpdate] = useState([]);
  const [openNew, setOpenNew] = useState(false);

  const setNewClient = () => {
    setOpenNew(!openNew);
  };

  const updateAllClients = () => {
    const getAllClients = localStorage.getItem('allClients');
    if (getAllClients === null) {
      localStorage.setItem('allClients', JSON.stringify(clients));
      setAllClientsUpdate(clients);
    } else {
      const parsedClients = JSON.parse(getAllClients);
      setAllClientsUpdate(parsedClients);
    }
  };

  useEffect(() => {
    updateAllClients();
  }, []);

  return (
    <div>
      <Header />
      <div className="table-container">
        <div className="button-row">
          <button type="button" onClick={setNewClient}>Cadastrar Novo Cliente</button>
        </div>
        {openNew && <ClientsCard updateAllClients={updateAllClients} />}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Veiculo</th>
              <th>Modelo</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Telefone</th>
              <th>QR Code</th>
            </tr>
          </thead>
          {allClientsUpdate && allClientsUpdate.map((client) => (
            <tbody>
              <tr key={client.cpf}>
                <td>{client.name}</td>
                <td>{client.vehicle}</td>
                <td>{client.model}</td>
                <td>{client.cpf}</td>
                <td>{client.rg}</td>
                <td>{client.telefone}</td>
                <td><QRCode value={`${client.name},${client.vehicle},${client.model},${client.rg},${client.telefone}`} /></td>
              </tr>
            </tbody>
            // <ClientsCard client={client} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Clients;
