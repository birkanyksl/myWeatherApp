import "./LoadSpinnerExtra.css";

const LoadSpinnerExtra = () => {
  return (
    <div className="extra-container spinner">
      <div className="extra">
        <div className="extra-info">
          <img src="./img/extraicons/fellsalike.png" alt="extra-img" />
          <span>Thermal Sensation</span>
        </div>
        <div className="extra-data">
          <span>???</span>
        </div>
      </div>

      <div className="extra">
        <div className="extra-info">
          <img src="./img/extraicons/rain.png" alt="extra-img" />
          <span>Probability of Rain</span>
        </div>
        <div className="extra-data">
          <span>???</span>
        </div>
      </div>

      <div className="extra">
        <div className="extra-info">
          <img src="./img/extraicons/wind.png" alt="extra-img" />
          <span>Wind Speed</span>
        </div>
        <div className="extra-data">
          <span>???</span>
        </div>
      </div>

      <div className="extra">
        <div className="extra-info">
          <img src="./img/extraicons/humidity.png" alt="extra-img" />
          <span>Air Humidity</span>
        </div>
        <div className="extra-data">
          <span>???</span>
        </div>
      </div>

      <div className="extra">
        <div className="extra-info">
          <img src="./img/extraicons/uv.png" alt="extra-img" />
          <span>UV Index</span>
        </div>
        <div className="extra-data">
          <span>???</span>
        </div>
      </div>
    </div>
  );
};

export default LoadSpinnerExtra;
