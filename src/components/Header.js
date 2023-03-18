import { useState } from "react";
import { Link } from "react-router-dom";
import isOnline from "../utils/isOnline";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const userOnline = isOnline();
  return (
    <div className="flex items-center justify-between p-2 m-2">
      <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/taste-logo-png-transparent.png"
          alt="logo"
          className="inline w-24"
        />
      </Link>
      <div>
        <ul className="flex items-stretch justify-between gap-x-2">
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

      <div className="flex items-center justify-between gap-x-1">
        <span title={userOnline ? "Online" : "Offline"}>
          {userOnline ? "✅" : "❌"}
        </span>
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
