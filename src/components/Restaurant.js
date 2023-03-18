import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAIL_API, IMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  let { rid } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(Object);
  const [apiStatus, setAPIStatus] = useState(0);
  const getRestaurantDetail = async () => {
    const data = await fetch(DETAIL_API + rid);
    const json = await data.json();

    if (Object.keys(json).length > 0 && json?.statusCode == 0) {
      setRestaurantMenu(json?.data);
      setAPIStatus(0);
    } else {
      setRestaurantMenu(Object);
      setAPIStatus(1);
    }
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  if (apiStatus == 1) return <h1>Restaurant not found!</h1>;

  return Object.keys(restaurantMenu).length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant">
      <div className="restaurant-detail">
        <h1>{restaurantMenu?.name}</h1>
        <img
          src={IMG_URL + restaurantMenu?.cloudinaryImageId}
          alt="restaurant image"
          width="200px"
        />
        <h3>{restaurantMenu?.avgRatingString}</h3>
        <h3>{restaurantMenu?.cuisines.join(", ")}</h3>
        <h3>{restaurantMenu?.locality + ", " + restaurantMenu?.city}</h3>
        <h3>{restaurantMenu?.sla?.slaString}</h3>
      </div>
      <div className="restaurant-menu">
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => {
            return (
              <li key={item.id}>
                {item.name} - &#8377; {item.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
