import { useEffect, useState } from "react";
import restaurants from "../Utils/restaurants.json";
import RestaurantCard from "./RestaurantCard";
const RestaurantContainer = (props) => {
  const { isTopRated } = props;
  const [list, setList] = useState(restaurants);
  useEffect(()=>{
    setList(isTopRated ? restaurants.filter(res=>res.info.avgRating > 4.2) : restaurants);
  }, [isTopRated]);
  return (
    <div className="restaurant-container">
      {list.map((res) => (
        <RestaurantCard key={res?.info?.id} res={res} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
