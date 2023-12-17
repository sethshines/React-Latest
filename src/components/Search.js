const Search = (props) => {
    const { setSearch} =  props;
    return <div className="search">
      <input name="search" placeholder="search" type="text" onChange={(e)=>setSearch(e.target.value)} />
    </div>;
  };

export default Search;