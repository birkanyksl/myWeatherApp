import "./ForecastedDays.css";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../store/redux";

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};
const ForecastedDays = () => {
  const forecastData = useSelector(selectForecastData);

  if (!forecastData || !forecastData.days) {
    return null;
  }

  const convertedData = forecastData.days.slice(1, 7).map((day) => ({
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
              <img src={`${day.icon}.png`} alt="Weather Icon" />
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
