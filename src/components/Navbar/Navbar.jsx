import SearchInput from "./SearchInput";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>WeatherApp</h1>
      {<SearchInput />}
    </div>
  );
};

export default Navbar;
