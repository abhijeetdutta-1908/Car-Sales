// src/pages/Register.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../utils/axios';
import './register.css'; // Link to the CSS file

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('dealer');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', { email, password, role });
      alert('Registration successful! Please login.');
      history.push('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
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
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="admin">Admin</option>
            <option value="sales">Sales</option>
            <option value="dealer">Dealer</option>
          </select>
          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <a onClick={() => history.push('/login')} href="#!">
            Go to Login
          </a>
        </p>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Register;