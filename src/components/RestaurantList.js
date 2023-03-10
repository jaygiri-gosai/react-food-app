import RestaurantCard from "./RestaurantCard";
const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        );
      })}
    </div>
  );
};

export default RestaurantList;
