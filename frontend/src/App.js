import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Inventory from './pages/Inventory';
import AddNewCar from './pages/AddNewCar';
import EditCar from './pages/EditCar';

function App() {
  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* Protected Routes */}
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute path="/inventory" component={Inventory} />
        <ProtectedRoute path="/add-car" component={AddNewCar} />
        <ProtectedRoute path="/edit-car/:id" component={EditCar} />
      </Switch>
    </Router>
  );
}

export default App;
