import { CDN_LINK } from "../Utils/constants";

const RestaurantCard = ({ res }) => {
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    res?.info;
  return (
    <div className="restaurant-card">
      <img
        src={
          CDN_LINK
           +
          cloudinaryImageId
        }
      />
      <h3 className="restaurant-name">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
