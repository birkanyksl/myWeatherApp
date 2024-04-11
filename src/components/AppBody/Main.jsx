/* eslint-disable react/prop-types */

import CurrentDay from "./CurrentDay";
import ForecastedDays from "./ForecastedDays";
import SearchInput from "../AppHeader/SearchInput";

import "./Main.css";

const Main = ({
  weatherData,
  fetchData,
  convertedData,
  data,
  fetchForecast,
}) => {
  if (!weatherData) {
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
      <CurrentDay weatherData={weatherData} />
      <ForecastedDays data={data} convertedData={convertedData} />
    </div>
  );
};

export default Main;
