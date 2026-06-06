import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>MEDICALS</span>
      </div>

      <ul className="nav-links">
        <li><a onClick={() => setCurrentPage('home')}>HOME</a></li>
        <li><a onClick={() => setCurrentPage('about')}>ABOUT US</a></li>
        <li><a onClick={() => setCurrentPage('services')}>SERVICES</a></li>
        <li><a onClick={() => setCurrentPage('contact')}>CONTACT US</a></li>
        <li><a onClick={() => setCurrentPage('login')} className="login-btn">LOGIN</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
