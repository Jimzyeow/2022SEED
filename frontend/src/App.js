import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginPage from "./components/Login/Login";
<<<<<<< Updated upstream
=======
import Cart from './components/Cart/Cart';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/shop" exact>
          <LoginPage />
        </Route> */}

        <Route path="/" exact component={Cart} />

        {/* <Route path="/checkout" exact>
          <LoginPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
