/* eslint-disable react/prop-types */

import CurrentDay from "./CurrentDay";
import ForecastedDays from "./ForecastedDays";
import "./Main.css";

const Main = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <CurrentDay weatherData={weatherData} />
      <ForecastedDays />
    </div>
  );
};

export default Main;
