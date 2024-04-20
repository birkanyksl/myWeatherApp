/* eslint-disable react/prop-types */
import "./CurrentDayExtraItem.css";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../store/redux";

const CurrentDayExtraItem = () => {
  const forecastData = useSelector(selectForecastData);

  return (
    <div className="extra-container">
      <>
        <div className="extra">
          <div className="extra-info">
            <img src="fellsalike.png" alt="extra-img" />
            <span>Thermal Sensation</span>
          </div>

          <div className="extra-data">
            <span>
              {(
                (forecastData.currentConditions?.feelslike - 32) *
                (5 / 9)
              ).toFixed(0)}
              °C
            </span>
          </div>
        </div>

        <div className="extra">
          <div className="extra-info">
            <img src="rainy.png" alt="extra-img" />
            <span>Probability of Rain</span>
          </div>
          <div className="extra-data">
            <span>2%</span> {/* her iki api de verisi bulunamadı */}
          </div>
        </div>

        <div className="extra">
          <div className="extra-info">
            <img src="wind.png" alt="extra-img" />
            <span>Wind Speed</span>
          </div>
          <div className="extra-data">
            <span>{forecastData.currentConditions.windspeed} km/h</span>
          </div>
        </div>

        <div className="extra">
          <div className="extra-info">
            <img src="humidity.png" alt="extra-img" />
            <span>Air Humidity</span>
          </div>
          <div className="extra-data">
            <span>{forecastData.currentConditions.humidity}%</span>
          </div>
        </div>

        <div className="extra">
          <div className="extra-info">
            <img src="uv.png" alt="extra-img" />
            <span>UV Index</span>
          </div>
          <div className="extra-data">
            <span>{forecastData.currentConditions.uvindex}</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default CurrentDayExtraItem;
