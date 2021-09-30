import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import classes from "./Navigation.module.css";
import LoginContext from "../../store/login-context";

const Nav = () => {
  const history = useHistory();
  const loginCtx = useContext(LoginContext);

  const logoutHandler = () => {
    loginCtx.logout();
    history.push("/");
  };

  const isLoggedIn = loginCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to="/">
        <div>DBS Shops</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <Link to="/shop">
              <li>View All Products</li>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/checkout">
              <li>Checkout</li>
            </Link>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
