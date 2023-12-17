import Search from './Search';
import RestaurantContainer from './RestaurantContainer';
import { useState } from 'react';
export const Body = () => {
  const [isTopRated, setIsTopRated] = useState(false);
  return (
    <div className="body">
      <Search />
      <button className={isTopRated ? 'filter-button-filled' : 'filter-button'} onClick={()=>setIsTopRated(!isTopRated)}>Top Rated</button>
      <RestaurantContainer isTopRated={isTopRated} />
    </div>
  );
};
