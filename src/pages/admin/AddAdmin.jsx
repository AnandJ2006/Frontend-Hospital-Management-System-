import React, { useState } from 'react';
import axios from 'axios';
import './AdminPages.css';

const AddAdmin = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setCurrentPage('admin-login');
        return;
      }

      await axios.post('https://hospital-management-system-t69x.onrender.com/api/admin/add', 
        { email, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("New admin successfully added!");
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('adminToken');
        setCurrentPage('admin-login');
      }
      setError(err.response?.data?.message || 'Failed to add admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Add New Admin</h1>
        <p>Create a new administrator account for the hospital system</p>
      </div>

      <div className="admin-form-container" style={{ maxWidth: '500px' }}>
        {message && <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '15px', borderRadius: '6px', marginBottom: '20px' }}>{message}</div>}
        {error && <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '6px', marginBottom: '20px' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #e1e5eb', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
              placeholder="e.g., manager@hospital.com"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #e1e5eb', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
              placeholder="Enter secure password"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #e1e5eb', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
              placeholder="Re-enter password"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              backgroundColor: '#e94560', 
              color: 'white', 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '6px', 
              fontSize: '1rem', 
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Creating...' : 'Create Admin Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
