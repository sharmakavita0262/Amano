import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
// import Sidebar from '../../Components/Sidebar';
import { useState } from 'react';

const DashboardLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
