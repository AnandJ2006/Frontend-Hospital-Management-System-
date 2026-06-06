import React, { useState } from 'react';
import axios from "axios";
import '../App.css';

export default function SignUp({ setCurrentPage }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      alert("Please fill all fields");
      return;
    }

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert("Enter a valid email");
      return;
    }

    try {
      const response = await axios.post(
        "https://hospital-management-system-t69x.onrender.com/api/user/signup",
        {
          fullname: name,
          email,
          username,
          password
        }
      );

      alert(response.data.message);

      // Navigate using state instead of reload
      setCurrentPage('login');

    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{' '}
        <button
          onClick={() => setCurrentPage('login')}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </p>
    </div>
  );
}