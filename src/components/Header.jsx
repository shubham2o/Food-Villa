const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="Food-Villa Logo"
        src="https://i.playboard.app/p/AAUvwnid3BDOuAtsI4uGV5D5H4LGGfPuPOQD-w88CHLP/default.jpg"
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