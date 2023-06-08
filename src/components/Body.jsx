const restaurantsList = [
    {
      type: "restaurant",
      data: {
        id: "92636",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Burgers", "American"],
        costForTwo: 35000,
        deliveryTime: 25,
        avgRating: "4.2",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "54977",
        name: "Jeet Restaurant",
        cloudinaryImageId: "o7xqmbsblqkr0v51sgwu",
        cuisines: ["North Indian", "Chinese"],
        costForTwo: 35000,
        deliveryTime: 21,
        avgRating: "3.8",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "599032",
        name: "Danish Kabab",
        cloudinaryImageId: "f1iyvzknuprskdajqtwf",
        cuisines: ["Indian"],
        costForTwo: 20000,
        deliveryTime: 21,
        avgRating: "4.2",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "279898",
        name: "Chai Point",
        cloudinaryImageId: "gvaqpk0sw91wvose44lg",
        cuisines: [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
        ],
        costForTwo: 15000,
        deliveryTime: 37,
        avgRating: "4.1",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "64268",
        name: "QWICK GRAB KATHI ROLLS and MORE",
        cloudinaryImageId: "l4er63qlpsoaxseewgsr",
        cuisines: ["Fast Food"],
        costForTwo: 30000,
        deliveryTime: 24,
        avgRating: "4.1",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "114269",
        name: "The Ruby Dhaba",
        cloudinaryImageId: "s3mpkoqnt88sucnfvvhh",
        cuisines: ["North Indian"],
        costForTwo: 40000,
        deliveryTime: 24,
        avgRating: "3.4",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "327046",
        name: "The China Door",
        cloudinaryImageId: "tzy0o3u92lkdzitpi0wl",
        cuisines: ["Chinese", "Thai", "Pan-Asian"],
        costForTwo: 30000,
        deliveryTime: 25,
        avgRating: "4.0",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "397778",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        cuisines: ["Pizzas"],
        costForTwo: 35000,
        deliveryTime: 25,
        avgRating: "3.5",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "159118",
        name: "Sultan Dhabha",
        cloudinaryImageId: "spokpghesjdzkxpmgvvm",
        cuisines: ["Indian"],
        costForTwo: 20000,
        deliveryTime: 16,
        avgRating: "3.8",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "253981",
        name: "McDonald's",
        cloudinaryImageId: "1293a58ab5610f4c730c3d8cb6ac1b65",
        cuisines: ["American"],
        costForTwo: 40000,
        deliveryTime: 25,
        avgRating: "4.2",
      },
    },
];

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
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>📃 {cuisines.join(", ")}</h3>
        <h4>⭐ {avgRating}</h4>
        <h4>⏲️ {deliveryTime} MINS</h4>
        <h4>💸 ₹{costForTwo / 100} FOR TWO</h4>
      </div>
    );
  };

const Body = () => {
    return (
      <div className="restaurant-list">
        {/* <RestaurantCard {...restaurantsList[0].data} />
        <RestaurantCard {...restaurantsList[1].data} /> */}
        {restaurantsList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    );
  };

export default Body;