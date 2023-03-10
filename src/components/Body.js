import { useState, useEffect } from "react";
import { API_URL, IMG_URL } from "../utils/constants";
import RestaurantList from "./RestaurantList";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const getRestaurantData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    let resArr = json?.data?.cards[2]?.data?.data?.cards;
    if (resArr && resArr.length > 0) setRestaurantData(resArr);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="container">
      <div className="container-head">
        <h1>Restaurants</h1>
        <div className="search-container">
          <input type="text" name="searchText" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
      {restaurantData.length > 0 ? (
        <RestaurantList restaurants={restaurantData} />
      ) : (
        <h1>No restaurants available at the moment!</h1>
      )}
    </div>
  );
};

export default Body;
