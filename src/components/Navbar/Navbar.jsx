/* eslint-disable react/prop-types */
import SearchInput from "./SearchInput";
import "./Navbar.css";

const Navbar = ({ fetchData }) => {
  return (
    <div className="navbar-container">
      <h1>myWeatherApp</h1>
      <SearchInput fetchData={fetchData} />
    </div>
  );
};

export default Navbar;
