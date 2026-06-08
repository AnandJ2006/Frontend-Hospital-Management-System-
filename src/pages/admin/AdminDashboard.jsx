import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPages.css';

const AdminDashboard = ({ setCurrentPage }) => {
  const [stats, setStats] = useState({ totalMessages: 0, totalUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setCurrentPage('admin-login');
      return;
    }

    const fetchStats = async () => {
      try {
        const [messagesRes, usersRes] = await Promise.all([
          axios.get('https://hospital-management-system-t69x.onrender.com/api/contact/all', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('https://hospital-management-system-t69x.onrender.com/api/user/all', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        
        setStats({ 
          totalMessages: messagesRes.data.length,
          totalUsers: usersRes.data.length
        });
      } catch (err) {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('adminToken');
          setCurrentPage('admin-login');
        }
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [setCurrentPage]);

  if (loading) {
    return <div className="admin-loading">Loading Dashboard...</div>;
  }

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <p>Overview of hospital system metrics</p>
      </div>

      <div className="admin-stats-container">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="stat-details">
            <h3>Total Users</h3>
            <p className="stat-number">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon message-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="stat-details">
            <h3>Total Messages</h3>
            <p className="stat-number">{stats.totalMessages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
