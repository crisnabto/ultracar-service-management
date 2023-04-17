import React from 'react';
import Header from '../components/Header';
import ServiceOrder from '../components/ServiceOrder';

function Servicos() {
  return (
    <div>
      <Header />
      <p>Nova ordem de serviço</p>
      <ServiceOrder />
    </div>
  );
}

export default Servicos;
