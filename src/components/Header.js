import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import isOnline from "../utils/isOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const userOnline = isOnline();
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-2 m-2">
      <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/taste-logo-png-transparent.png"
          alt="logo"
          className="inline w-24"
        />
      </Link>
      <div className="w-64">
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
        <div className="w-8" title={userOnline ? "Online" : "Offline"}>
          {userOnline ? "✅" : "❌"}
        </div>
        <div className="w-40">Cart</div>
        {!isLogin ? (
          <div className="w-54">
            <span className="px-2">Hi {user?.name}!</span>
            <button
              onClick={() => {
                setIsLogin(true);
                setUser({ name: "Jay", email: "jaygiri.gosai@yahoo.com" });
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="w-54">
            <span className="px-2">Welcome {user?.name}!</span>
            <button
              onClick={() => {
                setIsLogin(false);
                setUser({ name: "Guest", email: "" });
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
