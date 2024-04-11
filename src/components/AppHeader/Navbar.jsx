/* eslint-disable react/prop-types */
import SearchInput from "./SearchInput";
import "./Navbar.css";

const Navbar = ({ fetchData, weatherData, fetchForecast }) => {
  return (
    <div className="navbar-container">
      <h1>myWeatherApp</h1>
      {weatherData && (
        <SearchInput fetchData={fetchData} fetchForecast={fetchForecast} />
      )}
    </div>
  );
};

export default Navbar;
