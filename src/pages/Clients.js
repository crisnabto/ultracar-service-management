import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import ClientsCard from '../components/ClientsCard';
import Header from '../components/Header';
import clients from '../services/clientsData';
// import Context from '../Context/Context';

function Clients() {
  // const { allClients } = useContext(Context);
  const [allClientsUpdate, setAllClientsUpdate] = useState([]);
  const [openNew, setOpenNew] = useState(false);

  const setNewClient = () => {
    setOpenNew(!openNew);
  };

  useEffect(() => {
    console.log('entrou');
    const getAllClients = JSON.parse(localStorage.getItem('allClients') || []);
    if (getAllClients.length === 0) {
      localStorage.setItem('allClients', JSON.stringify(clients));
    }
    setAllClientsUpdate(getAllClients);
  }, []);

  return (
    <div>
      <Header />
      <p>Clientes</p>
      <button type="button" onClick={setNewClient}>Cadastrar</button>
      {openNew && <ClientsCard />}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Veiculo</th>
            <th>Modelo</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Telefone</th>
          </tr>
        </thead>
        {allClientsUpdate && allClientsUpdate.map((client) => (
          <tbody>
            <tr>
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
  );
}

export default Clients;
