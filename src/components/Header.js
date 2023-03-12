import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/taste-logo-png-transparent.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <div>
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="cart">
        <span className="cart-element">Cart</span>
        {!isLogin ? (
          <button onClick={() => setIsLogin(true)}>Login</button>
        ) : (
          <button onClick={() => setIsLogin(false)}>Logout</button>
        )}
      </div>
    </div>
  );
};
export default Header;
