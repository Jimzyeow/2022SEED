import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";
import Cart from './components/Cart/Cart';
import CheckoutReact from "./components/CheckoutHTML/CheckoutReact";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/shop" exact>
          <LoginPage />
        </Route>
        <Route path="/cart" exact>
          <LoginPage />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutReact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
