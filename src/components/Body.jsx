import { restaurantsList } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let searchTxt = ""; 
    return (
    <>
      <div className="search-container">
        <input 
        type="text" 
        className = "search-input" 
        placeholder="Search" 
        onChange={(e)=> searchTxt = e.target.value}
        value={searchTxt}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard {...restaurantsList[0].data} />
        <RestaurantCard {...restaurantsList[1].data} /> */}
        {restaurantsList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
    );
  };

export default Body;