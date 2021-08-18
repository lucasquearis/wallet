import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/wallet"
        >
          <Home />
        </Route>
        <Route
          path="/wallet/carteira"
        >
          <Wallet />
        </Route>
      </Switch>
    );
  }
}

export default App;
