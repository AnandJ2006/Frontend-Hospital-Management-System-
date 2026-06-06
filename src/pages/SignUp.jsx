import React from 'react';
import axios from "axios";
import '../App.css';

export default function SignUp() {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>

      <form onSubmit={async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (name === "" || email === "" || username === "" || password === "") {
          alert("Please fill all fields");
          return false;
        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
          alert("Enter a valid email");
          return false;
        }

        try {
        const response = await axios.post(
          "https://hospital-management-system-t69x.onrender.com/api/user/signup",
          {
            fullname: name,
            email: email,
            username: username,
            password: password
          }
        );

        alert(response.data.message);
        window.location.href = "/login";
      }
      catch(error){
        console.log(error);
        alert("Registration failed");
      }

        alert("Registration Successful!");
        window.location.href = "/login";
      }}>
        <input type="text" id="name" placeholder="Full Name" required /><br /><br />
        <input type="email" id="email" placeholder="Email" required /><br /><br />
        <input type="text" id="username" placeholder="Username" required /><br /><br />
        <input type="password" id="password" placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>

      <p>Already have an account? <a href="#">Login</a></p>
    </div>
  );
}
