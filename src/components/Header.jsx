import { LOGO_CDN_URL } from "../utils/constant";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food-Villa Logo"
      src= {LOGO_CDN_URL}
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;