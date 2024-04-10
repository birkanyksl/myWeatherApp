/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getWeatherIcon from "./weatherIcons";

const CurrentDay = ({ weatherData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  // Icon

  const iconPath = getWeatherIcon(weatherData.weather[0].id.toString());

  //Celcius

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  const temperatureCelsius = Math.round(kelvinToCelsius(weatherData.main.temp));
  const minTemperatureCelsius = Math.round(
    kelvinToCelsius(weatherData.main.temp_min)
  );
  const maxTemperatureCelsius = Math.round(
    kelvinToCelsius(weatherData.main.temp_max)
  );

  //Tarih

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="current-container">
      <div className="current-data-container">
        <div className="current-data">
          <p className="city-name">
            <span>{weatherData?.name}</span>
          </p>
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>

        <div className="weather-info-container">
          <div className="weather-info">
            <p>{temperatureCelsius}°C</p>
            <span>
              {minTemperatureCelsius}°C / {maxTemperatureCelsius}°C
            </span>
            <span>{weatherData.weather[0].description}</span>
          </div>

          <div className="current-data-img">
            <img src={iconPath} alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
