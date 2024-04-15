/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { selectWeatherData, selectForecastData } from "../../store/redux";
import CurrentDay from "./CurrentDay";
import ForecastedDays from "./ForecastedDays";
import CurrentDayExtra from "./CurrentDayExtra";
import SearchInput from "../AppHeader/SearchInput";
import "./Main.css";

const Main = () => {
  const weatherData = useSelector(selectWeatherData);
  const forecastData = useSelector(selectForecastData);

  if (!weatherData && !forecastData) {
    return (
      <div className="noweather-data">
        <h1>
          Welcome to <span>ReactWeather</span>
        </h1>
        <p>Choose a location to see the weather forecast.</p>
        <SearchInput />
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="div-currents">
        <CurrentDay />
        <CurrentDayExtra />
      </div>
      <div className="div-forecast">
        <ForecastedDays />
      </div>
    </div>
  );
};

export default Main;
