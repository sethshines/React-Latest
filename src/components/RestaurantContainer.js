import { useEffect, useState } from "react";
import restaurants from "../Utils/restaurants.json";
import RestaurantCard from "./RestaurantCard";
const RestaurantContainer = (props) => {
  const { isTopRated, search } = props;
  const [list, setList] = useState(restaurants);
  useEffect(()=>{
    let searchFilltered = restaurants;
    if(search) {
      searchFilltered = restaurants.filter((item)=>(item.info.name.toLowerCase()).indexOf(search.toLowerCase()) != -1)
    }

    if(isTopRated) {
      searchFilltered = searchFilltered.filter(res=>res.info.avgRating >= 4.5);
    }
    
    setList(searchFilltered);
  }, [isTopRated, search]);
  return (
    <div className="restaurant-container">
      {list.map((res) => (
        <RestaurantCard key={res?.info?.id} res={res} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
