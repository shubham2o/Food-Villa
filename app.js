import React from "react";
import ReactDOM from "react-dom/client";

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

const BurgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cuisine: ["Burgers", "American"],
  rating: "4.2",
  timeDuration: "29",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={BurgerKing.image} alt={BurgerKing.name} />
      <h2>{BurgerKing.name}</h2>
      <h3>{BurgerKing.cuisine.join(", ")}</h3>
      <h4>{BurgerKing.rating} stars</h4>
      <h4>{BurgerKing.timeDuration} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>This is Footer.</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
