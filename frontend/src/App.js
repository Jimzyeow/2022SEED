import { Switch, Route, Redirect } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";
<<<<<<< HEAD
import Nav from "./components/UI/Navigation";
import ViewProducts from "./components/Product/ViewProducts";
import Cart from "./components/Cart/Cart";
import LoginContext from "./store/login-context";
import ViewCategories from "./components/Product/ViewCategories";
=======
import Cart from './components/Cart/Cart';
import CheckoutReact from "./components/CheckoutHTML/CheckoutReact";

>>>>>>> 60a8857124f538fc11840fbed5cf4099d5af3e82

function App() {
  const loginCtx = useContext(LoginContext);

  console.log(loginCtx.isLoggedIn);

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
          {loginCtx.isLoggedIn && (
            <Route path="/shop" exact>
              <ViewCategories />
            </Route>
          )}
          {loginCtx.isLoggedIn && (
            <Route path="/cart" exact>
              <Cart />
            </Route>
          )}
          <Route path="/checkout" exact>
            <LoginPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
