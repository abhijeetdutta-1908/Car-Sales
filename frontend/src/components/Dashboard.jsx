import React from "react";
// Change the import to use CommonJS `require`
import jwtDecode from 'jwt-decode';

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;

  if (!user) return <p>Unauthorized</p>;

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>Role: {user.role}</p>
      {user.role === 'admin' && <div>Admin Panel</div>}
      {user.role === 'sales' && <div>Sales Tools</div>}
      {user.role === 'dealer' && <div>Dealer Dashboard</div>}
    </div>
  );
}
