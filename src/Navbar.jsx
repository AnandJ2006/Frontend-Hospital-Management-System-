import React from 'react';

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, handleLogout }) => {
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>MEDICALS</span>
      </div>

      <ul className="nav-links">
        <li><button onClick={() => navigate('home')} className="nav-link">HOME</button></li>
        <li><button onClick={() => navigate('about')} className="nav-link">ABOUT US</button></li>
        <li><button onClick={() => navigate('services')} className="nav-link">SERVICES</button></li>
        <li><button onClick={() => navigate('specialists')} className="nav-link">SPECIALISTS</button></li>
        <li><button onClick={() => navigate('contact')} className="nav-link">CONTACT US</button></li>

        {isLoggedIn ? (
          <li><button onClick={handleLogout} className="login-btn">LOGOUT</button></li>
        ) : (
          <li><button onClick={() => navigate('login')} className="login-btn">LOGIN</button></li>
        )}

        <li>
          <button onClick={() => navigate('admin-login')} className="login-btn admin-btn" style={{ marginLeft: '10px', backgroundColor: '#e94560' }}>
            ADMIN
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
