import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="navbar">
      
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>MEDICALS</span>
      </div>

      <ul className="nav-links">
        <li>
          <button onClick={() => setCurrentPage('home')} className="nav-link">
            HOME
          </button>
        </li>

        <li>
          <button onClick={() => setCurrentPage('about')} className="nav-link">
            ABOUT US
          </button>
        </li>

        <li>
          <button onClick={() => setCurrentPage('services')} className="nav-link">
            SERVICES
          </button>
        </li>

        <li>
          <button onClick={() => setCurrentPage('contact')} className="nav-link">
            CONTACT US
          </button>
        </li>

        <li>
          <button onClick={() => setCurrentPage('login')} className="login-btn">
            LOGIN
          </button>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;