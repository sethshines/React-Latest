import React from "react";
import ReactDOM from "react-dom/client";
import restaurants  from './restaurants.json';
const Logo = () => {
  return (
    <div className="logo">
      <img src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=800x600&vertical=center" />
    </div>
  );
};

const HeaderNavItems = () => {
  return (
    <div className="header-nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderNavItems />
    </div>
  );
};

const Search = () => {
  return <div className="search"></div>;
};

const RestaurantCard = ({ res }) => {

  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId} = res?.info;
  return (
    <div className="restaurant-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3 className="restaurant-name">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
      {restaurants.map((res) => (
        <RestaurantCard key={res?.info?.id} res={res} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantContainer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>@ copyright reserved 2024</p>{" "}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
