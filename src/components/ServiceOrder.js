import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import employees from '../services/employeesData';

function ServiceOrder() {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    employee: 'Andre Soares',
    client: '',
    vehicle: '',
    model: '',
    km: '',
    date: '',
    time: '',
    phone: '',
    description: '',
  });

  const openScanner = () => {
    setScannerOpen(true);
  };

  const closeScanner = () => {
    setScannerOpen(false);
  };

  const handleChange = (data) => {
    const qrcodeData = data.split(',');
    setOrderInfo((prevState) => (
      {
        ...prevState,
        client: qrcodeData[0],
        vehicle: qrcodeData[1],
        model: qrcodeData[2],
        phone: qrcodeData[4],
      }));
    // setModel(qrcodeData[2]);
  };

  const handleScan = (data) => {
    if (data) {
      closeScanner();
      handleChange(data.text);
    }
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    setOrderInfo((prevState) => (
      {
        ...prevState,
        time: currentTime,
      }));
  };

  const handleSubmit = () => {
    getTime();
    console.log(orderInfo);
    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    allOrders.push(orderInfo);
    localStorage.setItem('allOrders', JSON.stringify(allOrders));
    console.log(allOrders);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderInfo({ ...orderInfo, [name]: value });
  };

  return (
    <form>
      <button type="button" onClick={openScanner}>Ler QR Code</button>
      {scannerOpen && (
        <QrScanner
          delay={300}
          style={{ width: '50%' }}
          onScan={handleScan}
          onError={(err) => console.error(err)}
        />
      )}

      <label htmlFor="client">
        <span>Cliente</span>
        <input
          id="client"
          name="client"
          value={orderInfo.client}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="phone">
        <span>Telefone</span>
        <input
          type="tel"
          pattern="[0-9]{10,11}"
          id="phone"
          name="phone"
          value={orderInfo.phone}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="vehicle">
        <span>Veiculo</span>
        <input
          id="vehicle"
          name="vehicle"
          onChange={handleInputChange}
          value={orderInfo.vehicle}
        />
      </label>

      <label htmlFor="model">
        <span>Modelo</span>
        <input
          id="model"
          name="model"
          onChange={handleInputChange}
          value={orderInfo.model}
        />
      </label>

      <label htmlFor="km">
        <span>Kilometragem</span>
        <input
          id="km"
          name="km"
          value={orderInfo.km}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="employee">
        <span>Funcionario</span>
        <select
          id="employee"
          name="employee"
          onChange={handleInputChange}
          value={orderInfo.employee}
        >
          {employees.map((emp) => (
            <option>{emp}</option>
          ))}
        </select>
      </label>

      <label htmlFor="date">
        <span>Data</span>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleInputChange}
          value={orderInfo.date}
        />
      </label>

      <label htmlFor="description">
        <span>Descricao</span>
        <textarea
          value={orderInfo.description}
          onChange={handleInputChange}
          name="description"
        />
      </label>

      <button
        type="button"
        onClick={handleSubmit}
      >
        Cadastrar nova ordem de servico

      </button>

    </form>
  );
}

export default ServiceOrder;
