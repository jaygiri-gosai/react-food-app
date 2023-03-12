export const searchRestaurant = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
