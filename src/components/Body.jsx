import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, listOfRestaurants) {
  return listOfRestaurants.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { getRestaurants(); }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6406443&lng=77.2746373&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) {
    return null;
  }

  return (allRestaurants?.length === 0) ? <Shimmer /> :
    (
      <>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }} />

          <button className="search-btn"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          > Search
          </button>
        </div>

        <div className="restaurant-list">
          {
            filteredRestaurants.length === 0
              ?
              <h2><em>No match found for "{searchText}"</em></h2>
              :
              filteredRestaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
              })
          }
        </div>
      </>
    );
};

export default Body;