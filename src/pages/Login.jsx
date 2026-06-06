import React, { useState } from 'react';
import '../App.css';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://hospital-management-system-t69x.onrender.com/api/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('loginTime', new Date().toISOString());

        alert(data.message);
        setCurrentPage('home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Server Error');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        New User?{' '}
        <a
          onClick={() => setCurrentPage('signup')}
          style={{ cursor: 'pointer' }}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;