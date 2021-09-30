import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <Link to="/home">
        <div>DBS Shops</div>
      </Link>
      <nav>
        <ul>
          <li>Shop</li>
          <li>Cart</li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
