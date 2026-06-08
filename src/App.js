import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMessages from './pages/admin/AdminMessages';
import AdminUsers from './pages/admin/AdminUsers';
import AddAdmin from './pages/admin/AddAdmin';
import AdminSidebar from './components/AdminSidebar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUp setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'admin-login':
        return <AdminLogin setCurrentPage={setCurrentPage} />;
      case 'admin-dashboard':
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      case 'admin-messages':
        return <AdminMessages setCurrentPage={setCurrentPage} />;
      case 'admin-users':
        return <AdminUsers setCurrentPage={setCurrentPage} />;
      case 'admin-add':
        return <AddAdmin setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    setCurrentPage('admin-login');
  };

  const isAdminPage = currentPage.startsWith('admin-') && currentPage !== 'admin-login';

  if (currentPage === 'admin-login') {
    return (
      <div className="App">
        {renderPage()}
      </div>
    );
  }

  if (isAdminPage) {
    return (
      <div className="admin-layout">
        <AdminSidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          handleLogout={handleAdminLogout} 
        />
        <div className="admin-main">
          {renderPage()}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
