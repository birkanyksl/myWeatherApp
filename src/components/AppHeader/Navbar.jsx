import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../store/redux";
import "./Navbar.css";
const Navbar = () => {
  const weatherData = useSelector(selectWeatherData);
  return (
    <div className="navbar-container">
      <h1>myWeatherApp</h1>
      {weatherData && <SearchInput />}
    </div>
  );
};

export default Navbar;
