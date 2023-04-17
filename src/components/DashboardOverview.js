import React, { useEffect, useState } from 'react';

function DashboardOverview() {
  const [showAllOrders, setShowAllOrders] = useState([]);

  useEffect(() => {
    const getAllOrders = JSON.parse(localStorage.getItem('allOrders'));
    setShowAllOrders(getAllOrders);
    console.log(getAllOrders);
  });

  return (
    <div>
      <p>Dashboard</p>
      {showAllOrders && (
        <div>
          <p>{showAllOrders.length}</p>
        </div>
      )}
    </div>
  );
}

export default DashboardOverview;
