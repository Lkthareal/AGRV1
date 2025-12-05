import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

interface LayoutProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-agr-dark">
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;