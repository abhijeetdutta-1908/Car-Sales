// src/pages/Login.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../utils/axios';
import './login.css'; // <-- Import CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('sales');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', {
        email,
        password,
        role,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.role === 'admin') {
        history.push('/admin-dashboard');
      } else if (payload.role === 'dealer') {
        history.push('/dealer-dashboard');
      } else if (payload.role === 'sales') {
        history.push('/sales-dashboard');
      } else {
        history.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials or wrong role selected');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
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
            <option value="sales">Sales</option>
            <option value="dealer">Dealer</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Login</button>
        </form>
        {/* <div className="register-link">
          <p></p>
          <button onClick={() => history.push('/register')}>Go to Register</button> 
        </div> */}

        <p className="register-link">
          Don't have an account?{' '}
          <a onClick={() => history.push('/register')} href="#!">
            Go to Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;