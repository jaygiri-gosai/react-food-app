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
    <div className="w-72 border-2 leading-relaxed p-2">
      <Link to={"/restaurant/" + id}>
        <img src={IMG_URL + cloudinaryImageId} />
        <h2 className="text-lg font-bold py-2">{name}</h2>
        <p className="py-1">{cuisines.join(", ")}</p>
        <p className="py-1">{address}</p>
        <p className="py-1">{avgRating}</p>
        <p className="py-1">{lastMileTravelString}</p>
      </Link>
    </div>
  );
};
export default RestaurantCard;
