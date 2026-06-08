import React from 'react';
import './AdminSidebar.css';

const AdminSidebar = ({ currentPage, setCurrentPage, handleLogout }) => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Hospital Admin</h2>
      </div>
      <ul className="sidebar-menu">
        <li 
          className={currentPage === 'admin-dashboard' ? 'active' : ''}
          onClick={() => setCurrentPage('admin-dashboard')}
        >
          Dashboard
        </li>
        <li 
          className={currentPage === 'admin-users' ? 'active' : ''}
          onClick={() => setCurrentPage('admin-users')}
        >
          Users
        </li>
        <li 
          className={currentPage === 'admin-add' ? 'active' : ''}
          onClick={() => setCurrentPage('admin-add')}
        >
          Add Admin
        </li>
        <li 
          className={currentPage === 'admin-messages' ? 'active' : ''}
          onClick={() => setCurrentPage('admin-messages')}
        >
          Messages
        </li>
      </ul>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
