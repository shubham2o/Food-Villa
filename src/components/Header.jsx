import { LOGO_CDN_URL } from "../utils/constant";
import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food-Villa Logo"
      src={LOGO_CDN_URL}
    />
  </a>
);

const Header = () => {
  const [btnName, setBtnName] = useState("true");

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {
            btnName
              ?
              <button className="login"
                onClick={() => { setBtnName(false); }}>
                Logout
              </button>
              :
              <button className="login"
                onClick={() => { setBtnName(true); }}>
                Login
              </button>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;