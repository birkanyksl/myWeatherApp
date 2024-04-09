/* eslint-disable react/prop-types */

import CurrentDay from "./CurrentDay";
import ForecastedDays from "./ForecastedDays";
import SearchInput from "../AppHeader/SearchInput";

import "./Main.css";

const Main = ({ weatherData, fetchData }) => {
  if (!weatherData) {
    return (
      <div>
        <SearchInput fetchData={fetchData} />
      </div>
    );
  }

  return (
    <div className="main-container">
      <CurrentDay weatherData={weatherData} />
      <ForecastedDays />
    </div>
  );
};

export default Main;
