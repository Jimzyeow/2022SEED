import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";
import Cart from './components/Cart/Cart';
import CheckoutReact from "./components/CheckoutHTML/CheckoutReact";


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <ViewCategories />
              
            </Route>
            <Route path="/:id/products/">
              <ViewProducts />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
