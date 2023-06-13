import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  }) => {
    return (
      <div className="card">
        <img
        className="res-img"
        alt="Restaurant Image" 
        src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>📃 {cuisines.join(", ")}</h3>
        <h4>⭐ {avgRating}</h4>
        <h4>⏲️ {deliveryTime} MINS</h4>
        <h4>💸 ₹{costForTwo / 100} FOR TWO</h4>
      </div>
    );
  };

  export default RestaurantCard;