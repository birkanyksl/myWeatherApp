/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Temperature.css";
import { useState } from "react";
import getWeatherIcon from "./weatherIcons";

const Temperature = ({ weatherData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  // Icon

  // const iconBaseUrl = "http://openweathermap.org/img/wn/";
  // const iconCode = weatherData.weather[0].icon;
  // const iconUrl = `${iconBaseUrl}${iconCode}@2x.png`;

  // const iconFolderPath = "img/weatherconditions/";

  // const getIconPath = (description) => {
  //   const normalizedDescription = description.toLowerCase().replace(/\s/g, "-");
  //   return `${iconFolderPath}${normalizedDescription}.png`;
  // };
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
    <div className="temperature-container">
      <p className="day-time-container">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </p>

      <p className="city-name">
        <span>{weatherData?.name}</span>
      </p>

      <p className="temp">{temperatureCelsius}°C</p>

      <div className="weather-info-container">
        <div className="weather-info">
          <img src={iconPath} alt="Weather Icon" />
          <p className="description">{weatherData.weather[0].description}</p>
        </div>

        <p className="daily-low-high">
          <span>Low: {minTemperatureCelsius}°C</span>
          <span>High: {maxTemperatureCelsius}°C</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
