import React from 'react';
import Header from '../components/Header';
import DashboardOverview from '../components/DashboardOverview';

function Dashboard() {
  return (
    <div>
      <Header />
      <p>Dashboard</p>
      <DashboardOverview />
    </div>
  );
}

export default Dashboard;
