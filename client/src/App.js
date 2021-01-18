import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Helper/PrivateRoute';
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import ForgotPassword from './Pages/ForgotPassword'
import Customer from './Pages/Customer'
import CreateNewCustomer from './Pages/CreateNewCustomer'

import Organisation from './Pages/Organisation'
import CreateNewOrganisation from './Pages/CreateNewOrganisation'


function App() {
  return (
    
    <Router>
      <div className="wrapper" >
        <div className="row no-gutters">
          <Navigation />
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/about-us" component={About} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/forgot-password" component={ForgotPassword} />
              <Route exact={true} path="/register" component={Register} />
              <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />
              <PrivateRoute exact={true} path="/customer" component={Customer} />
              <PrivateRoute exact={true} path="/create-new-customer" component={CreateNewCustomer} />
              <PrivateRoute exact={true} path="/organization" component={Organisation} />
              <PrivateRoute exact={true} path="/create-new-organization" component={CreateNewOrganisation} />
              
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
