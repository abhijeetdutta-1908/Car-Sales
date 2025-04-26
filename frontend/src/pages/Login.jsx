// src/pages/Login.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../utils/axios';
import jwt_decode from 'jwt-decode';  // Import jwt-decode

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('dealer'); // default role
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { email, password, role });

      // Save the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Decode token to get the user's role
      const decodedToken = jwt_decode(response.data.token);
      const userRole = decodedToken.role;

      // Redirect based on the user's role
      if (userRole === 'admin') {
        history.push('/admin-dashboard');
      } else if (userRole === 'sales') {
        history.push('/sales-dashboard');
      } else if (userRole === 'dealer') {
        history.push('/dealer-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Invalid credentials');
    }
  };

  return (
    <div>
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
          <option value="admin">Admin</option>
          <option value="sales">Sales</option>
          <option value="dealer">Dealer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
