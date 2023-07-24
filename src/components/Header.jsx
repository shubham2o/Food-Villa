import { LOGO_CDN_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="Food-Villa Logo" src={LOGO_CDN_URL} />
    </a>
  );
}

const Header = () => {
  const [btnName, setBtnName] = useState("true");

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
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