import RestaurantCard from "./RestaurantCard";
const RestaurantList = ({ restaurants }) => {
  return (
    <div className="flex my-5 m-2 p-2 flex-wrap gap-14">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        );
      })}
    </div>
  );
};

export default RestaurantList;
