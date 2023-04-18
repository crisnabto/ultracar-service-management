import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';

function DashboardOverview() {
  const [showAllOrders, setShowAllOrders] = useState([]);
  const [filter, setFilter] = useState([]);
  const [overview, setOverview] = useState({
    inProgress: [],
    pending: [],
    finished: [],
  });

  useEffect(() => {
    const getAllOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    const inProgress = getAllOrders.filter((order) => order.status === 'Em andamento');
    const pending = getAllOrders.filter((order) => order.status === 'Com pendencias');
    const finished = getAllOrders.filter((order) => order.status === 'Concluida');
    setOverview((prevState) => (
      {
        ...prevState,
        inProgress,
        pending,
        finished,
      }));
    setShowAllOrders(getAllOrders);
    setFilter(getAllOrders);
  }, []);

  const handleFilter = (event) => {
    const { value } = event.target;
    if (value !== 'todas') {
      const orders = showAllOrders.filter((order) => order.status === value);
      setFilter(orders);
    } else {
      // console.log(showAllOrders);
      setFilter(showAllOrders);
    }
  };

  return (
    <div className="dashboard">
      {/* <h1>Dashboard</h1> */}
      {showAllOrders && (
        <div className="dashboard-container">
          <div className="first-buttons">
            <div className="buttons-container">
              <button
                type="button"
                onClick={handleFilter}
                value="todas"
              >
                O.S. totais
                <p>{showAllOrders.length}</p>
              </button>
            </div>

            <div className="buttons-container">
              <button
                type="button"
                onClick={handleFilter}
                value="Em andamento"
              >
                O.S. em andamento
                <p>{overview.inProgress.length}</p>
              </button>
            </div>

            <div className="buttons-container">
              <button
                type="button"
                onClick={handleFilter}
                value="Com pendencias"
              >
                O.S. com pendencias
                <p>{overview.pending.length}</p>
              </button>
            </div>

            <div className="buttons-container">
              <button
                type="button"
                onClick={handleFilter}
                value="Finalizado"
              >
                O.S. finalizadas
                <p>{overview.finished.length}</p>
              </button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Funcionario</th>
                <th>Data</th>
                <th>Status</th>
                <th>Veiculo</th>
                <th>Cliente</th>
                <th>Editar</th>
              </tr>
            </thead>

            {filter.map((order, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.employee}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.vehicle}</td>
                  <td>{order.client}</td>
                  <td><button type="button">Editar</button></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default DashboardOverview;
