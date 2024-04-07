/* eslint-disable react/prop-types */
import "./Temperature.css";
const Temperature = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="temperature-container">
      <p className="day-time-container">
        <span>15.03.2024</span>
        <span>14.30</span>
      </p>
      <p className="city-name">
        <span>{weatherData?.name}</span>
      </p>
      <p className="temp">8°C</p>

      <div className="weather-info-container">
        <div className="weather-info">
          <span>icon</span>
          <p className="description">{weatherData.weather[0].description}</p>
        </div>
        <p>
          <span>Low: 8°C</span>
          <span>High: 12°C</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
