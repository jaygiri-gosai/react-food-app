import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  address,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{address}</p>
      <p>{avgRating}</p>
      <p>{lastMileTravelString}</p>
    </div>
  );
};
export default RestaurantCard;
