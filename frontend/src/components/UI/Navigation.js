import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
//import classes from "./Navigation.module.css";
import LoginContext from "../../store/login-context";

const Nav = () => {
  const history = useHistory();
  const loginCtx = useContext(LoginContext);

  const logoutHandler = () => {
    loginCtx.logout();
    history.push("/");
  };

  const clickHandler = () => {
    history.push("/cart");
  };

  const isLoggedIn = loginCtx.isLoggedIn;

  return (
    <header>
      <Link to="/">
        <div>DBS Shops</div>
      </Link>
      <nav>
        <ul>
          <Link>
            <li>Shop</li>
          </Link>
          <Link>
            <li>Cart</li>
          </Link>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
