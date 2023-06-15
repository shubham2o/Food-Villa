import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/constant";
import { useState } from "react";

function filterData(searchText, listOfRestaurants) {
  return listOfRestaurants.filter((res) => 
    res.data.name.includes(searchText));
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("False");
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);

  return (
  <>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange = {(e) => {setSearchText(e.target.value)}}/>
      <button className="search-btn"
        onClick = {() => {
          /* if (searchClicked === "False") {
              setSearchClicked("True")
            } else {
              setSearchClicked("False")
            } */
          setSearchClicked(searchClicked === "False" ? "True" : "False");
          const data = filterData(searchText, listOfRestaurants);
          setListOfRestaurants(data);
        }}
      > Search 
      </button>
      <h1>{searchClicked}</h1>
    </div>
    <div className="restaurant-list">
      {/* <RestaurantCard {...restaurantsList[0].data} />
      <RestaurantCard {...restaurantsList[1].data} /> */}
      {listOfRestaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  </>
  );
};

export default Body;