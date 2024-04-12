/* eslint-disable react/prop-types */
import "./CurrentDayExtraItem.css";
import LoadSpinnerExtra from "../LoadSpinner/LoadSpinnerExtra";

const CurrentDayExtraItem = ({ data }) => {
  return (
    <div className="extra-container">
      {data ? (
        <>
          <div className="extra">
            <div className="extra-info">
              <img src="./img/extraicons/fellsalike.png" alt="extra-img" />
              <span>Thermal Sensation</span>
            </div>

            <div className="extra-data">
              <span>
                {((data.currentConditions?.feelslike - 32) * (5 / 9)).toFixed(
                  0
                )}
                °C
              </span>
            </div>
          </div>

          <div className="extra">
            <div className="extra-info">
              <img src="./img/extraicons/rain.png" alt="extra-img" />
              <span>Probability of Rain</span>
            </div>
            <div className="extra-data">
              <span>25</span>
            </div>
          </div>

          <div className="extra">
            <div className="extra-info">
              <img src="./img/extraicons/wind.png" alt="extra-img" />
              <span>Wind Speed</span>
            </div>
            <div className="extra-data">
              <span>{data.currentConditions.windspeed} km/h</span>
            </div>
          </div>

          <div className="extra">
            <div className="extra-info">
              <img src="./img/extraicons/humidity.png" alt="extra-img" />
              <span>Air Humidity</span>
            </div>
            <div className="extra-data">
              <span>{data.currentConditions.humidity}%</span>
            </div>
          </div>

          <div className="extra">
            <div className="extra-info">
              <img src="./img/extraicons/uv.png" alt="extra-img" />
              <span>UV Index</span>
            </div>
            <div className="extra-data">
              <span>{data.currentConditions.uvindex}</span>
            </div>
          </div>
        </>
      ) : (
        <LoadSpinnerExtra />
      )}
    </div>
  );
};

export default CurrentDayExtraItem;
