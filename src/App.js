import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './layout/Admin';

const App = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <Admin {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
);

export default App;