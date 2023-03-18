import { useState, useEffect } from "react";
import { API_URL, IMG_URL } from "../utils/constants";
import RestaurantList from "./RestaurantList";
import { searchRestaurant } from "../utils/helper";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noDataFound, setNoDataFound] = useState(false);

  const getRestaurantData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    let resArr = json?.data?.cards[2]?.data?.data?.cards;
    if (resArr && resArr.length > 0) {
      setRestaurantData(resArr);
      setFilteredData(resArr);
    } else {
      setNoDataFound(true);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="">
      {restaurantData?.length <= 0 ? (
        <Shimmer />
      ) : (
        <div className="text-center m-auto w-[50%]">
          <input
            className="border-solid border-2 border-gray-dark mx-2 rounded-md"
            type="text"
            name="searchText"
            value={searchText}
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const data = searchRestaurant(searchText, restaurantData);
              data.length > 0 ? setFilteredData(data) : setFilteredData([]);
              setNoDataFound(true);
            }}
          >
            Search
          </button>
        </div>
      )}

      {filteredData?.length <= 0 ? (
        noDataFound != false && <h1>No restaurants available at the moment!</h1>
      ) : (
        <RestaurantList restaurants={filteredData} />
      )}
    </div>
  );
};

export default Body;
