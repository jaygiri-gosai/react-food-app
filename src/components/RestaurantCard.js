import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  address,
  avgRating,
  lastMileTravelString,
  id,
}) => {
  return (
    <Link to={"/restaurant/" + id}>
      <div className="card">
        <img src={IMG_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>{address}</p>
        <p>{avgRating}</p>
        <p>{lastMileTravelString}</p>
      </div>
    </Link>
  );
};
export default RestaurantCard;
