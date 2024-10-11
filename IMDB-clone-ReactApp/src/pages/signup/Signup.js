// src/pages/signup/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import AuthContext
import './Signup.css'; // Import your styles here

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  // src/pages/signup/Signup.js
const handleSignup = async (e) => {
  e.preventDefault();
  try {
      const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
          const data = await response.json();
          login({ username: data.username }); // Set user data in context
          navigate('/'); // Redirect to home
      } else {
          throw new Error('Signup failed');
      }
  } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
  }
};


  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2 style={{ color: 'white' }}>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
