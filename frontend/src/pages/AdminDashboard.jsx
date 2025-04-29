// src/pages/AdminDashboard.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

function AdminDashboard() {
  const history = useHistory();

  const handleLogout = () => {
    // Clear any authentication tokens or session data here if needed
    alert('You have been logged out.');
    history.push('/login'); // Redirect to the login page
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage all users and data.</p>
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button>
    </div>
  );
}

// Inline styling for the logout button (optional)
const logoutButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

logoutButtonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default AdminDashboard;