import React from 'react';
import Footer from '../Footer/Footer'
import { Header } from '../Header/Header'
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;