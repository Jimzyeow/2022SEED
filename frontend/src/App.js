import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";
import Nav from "./components/UI/Navigation";
import ViewProducts from "./components/Product/ViewProducts";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/shop" exact>
            <ViewProducts />
          </Route>
          <Route path="/cart" exact>
            <LoginPage />
          </Route>
          <Route path="/checkout" exact>
            <LoginPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
