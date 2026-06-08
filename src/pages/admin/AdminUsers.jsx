import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPages.css';

const AdminUsers = ({ setCurrentPage }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setCurrentPage('admin-login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://hospital-management-system-t69x.onrender.com/api/user/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('adminToken');
          setCurrentPage('admin-login');
        }
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setCurrentPage]);

  if (loading) {
    return <div className="admin-loading">Loading Users...</div>;
  }

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Registered Users</h1>
        <p>View details of all users registered in the system</p>
      </div>

      <div className="messages-table-container">
        {users.length === 0 ? (
          <div className="no-data">No users found.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td style={{ fontWeight: 500 }}>{user.fullname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <span style={{
                      backgroundColor: user.role === 'admin' ? '#ffe0e6' : '#e0f7fa',
                      color: user.role === 'admin' ? '#e94560' : '#00acc1',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      {user.role || 'User'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
