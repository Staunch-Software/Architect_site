import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app-layout">
      <Nav />
      {/* Outlet renders the child route's element (Home, About, or Project) */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;