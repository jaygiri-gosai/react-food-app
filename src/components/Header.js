const Header = () => {
  return (
    <div className="header">
      <img
        src="https://cdn.freebiesupply.com/logos/large/2x/taste-logo-png-transparent.png"
        alt="logo"
        className="logo"
      />
      <div>
        <ul className="nav-bar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="cart">Cart</div>
    </div>
  );
};
export default Header;
