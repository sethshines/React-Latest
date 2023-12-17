import Search from './Search';
import RestaurantContainer from './RestaurantContainer';
import { useState } from 'react';
export const Body = () => {
  const [search, setSearch] = useState('');
  const [isTopRated, setIsTopRated] = useState(false);
  return (
    <div className="body">
      <Search setSearch={setSearch} />
      <button className={isTopRated ? 'filter-button-filled' : 'filter-button'} onClick={()=>setIsTopRated(!isTopRated)}>Top Rated</button>
      <RestaurantContainer search={search} isTopRated={isTopRated} />
    </div>
  );
};
