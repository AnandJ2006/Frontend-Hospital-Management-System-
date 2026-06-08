import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPages.css';

const AdminMessages = ({ setCurrentPage }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setCurrentPage('admin-login');
      return;
    }

    fetchMessages(token);
  }, [setCurrentPage]);

  const fetchMessages = async (token) => {
    try {
      const response = await axios.get('https://hospital-management-system-t69x.onrender.com/api/contact/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessages(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('adminToken');
        setCurrentPage('admin-login');
      }
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const token = localStorage.getItem('adminToken');
      try {
        await axios.delete(`https://hospital-management-system-t69x.onrender.com/api/contact/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessages(messages.filter(msg => msg._id !== id));
      } catch (err) {
        console.error('Error deleting message:', err);
        alert('Failed to delete message');
      }
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading Messages...</div>;
  }

  return (
    <div className="admin-content">
      <div className="admin-header">
        <h1>Contact Messages</h1>
        <p>View and manage messages from the contact form</p>
      </div>

      <div className="messages-table-container">
        {messages.length === 0 ? (
          <div className="no-data">No messages found.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{new Date(msg.submittedAt || msg.createdAt || Date.now()).toLocaleDateString()}</td>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.subject}</td>
                  <td>{msg.message}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(msg._id)}>
                      Delete
                    </button>
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

export default AdminMessages;
