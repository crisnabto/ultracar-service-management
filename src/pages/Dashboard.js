import React from 'react';
import Header from '../components/Header';
import DashboardOverview from '../components/DashboardOverview';

function Dashboard() {
  return (
    <div className="general-box">
      <Header />
      <DashboardOverview />
    </div>
  );
}

export default Dashboard;
