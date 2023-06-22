import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchText, listOfRestaurants) {
  return listOfRestaurants.filter((res) => 
    res.data.name.includes(searchText));
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("False");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {getRestaurants();}, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6406443&lng=77.2746373&page_type=DESKTOP_WEB_LISTING"
      );

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

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