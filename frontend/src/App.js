import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";

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
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
