import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../css/Details.css';

function Details() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split('/')[2];
    const allOrder = JSON.parse(localStorage.getItem('allOrders'));
    setOrder(allOrder[id]);
  }, []);

  const changeStatus = () => {
    setOrder({ ...order, status: 'Concluida' });
  };

  useEffect(() => {
    const allOrder = JSON.parse(localStorage.getItem('allOrders')) || [];
    const editOrder = allOrder.filter((ord) => ord.client !== order.client);
    editOrder.push(order);
    localStorage.setItem('allOrders', JSON.stringify(editOrder));
  }, [order]);

  return (
    <div className="button-container">
      <Header />
      {order && (
        <>
          <table className="details-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contato</th>
                <th>Funcionario</th>
                <th>Data</th>
                <th>Status</th>
                <th>Veiculo</th>
                <th>Modelo</th>
                <th>Pecas</th>
                <th>Descricao</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{order.client}</td>
                <td>{order.phone}</td>
                <td>{order.employee}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.vehicle}</td>
                <td>{order.model}</td>
                <td>{order.carPart}</td>
                <td>{order.description}</td>
              </tr>
            </tbody>
          </table>
          <button type="button" onClick={changeStatus}>Finalizar</button>

        </>
      )}
    </div>
  );
}

export default Details;
