import { useState, useEffect } from "react";
import axios from "axios";
import "./ForecastedDays.css";

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};

const ForecastedDays = () => {
  const [data, setData] = useState(null);

  const location = "Ankara";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=H9XZ4B674XJH93UPCVSKVUUZJ`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    if (location) {
      fetchForecast();
    }
  }, [location]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const convertedData = data.days.slice(1, 7).map((day) => ({
    ...day,
    temp: fahrenheitToCelsius(day.temp),
    tempmax: fahrenheitToCelsius(day.tempmax),
    tempmin: fahrenheitToCelsius(day.tempmin),
  }));

  return (
    <div className="forecast-container">
      {convertedData.map((day, index) => (
        <div className="forecast-item-container" key={index}>
          <div className="forecast-item">
            <div className="forecast-day">
              {new Date(day.datetime).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>

            <div className="forecast-temp">{day.temp.toFixed(0)}°C</div>

            <div className="forecast-image">
              <img
                src={`./img/forecasticons/${day.icon}.png`}
                alt="Weather Icon"
              />
            </div>

            <div className="forecast-minmax">
              {day.tempmin.toFixed(0)}°C / {day.tempmax.toFixed(0)}°C
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastedDays;
