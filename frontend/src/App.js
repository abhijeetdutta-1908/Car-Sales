// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import SalesDashboard from './pages/SalesDashboard';
import DealerDashboard from './pages/DealerDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/sales-dashboard" component={SalesDashboard} />
        <Route path="/dealer-dashboard" component={DealerDashboard} />
        {/* Add your other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
