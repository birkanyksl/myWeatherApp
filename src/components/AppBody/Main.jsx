/* eslint-disable react/prop-types */

import CurrentDay from "./CurrentDay";
import ForecastedDays from "./ForecastedDays";
import SearchInput from "../AppHeader/SearchInput";
import "./Main.css";
import CurrentDayExtra from "./CurrentDayExtra";

const Main = ({ weatherData, fetchData, data, fetchForecast }) => {
  if (!weatherData && !data) {
    return (
      <div className="noweather-data">
        <h1>
          Welcome to <span>ReactWeather</span>
        </h1>
        <p>Choose a location to see the weather forecast.</p>
        <SearchInput fetchData={fetchData} fetchForecast={fetchForecast} />
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="div-currents">
        <CurrentDay weatherData={weatherData} />
        <CurrentDayExtra data={data} />
      </div>
      <div className="div-forecast">
        <ForecastedDays data={data} />
      </div>
    </div>
  );
};

export default Main;
