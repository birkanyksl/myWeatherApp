import axios from "axios";
import { useEffect, useState } from "react";
import "./ForecastedDays.css";

const kelvinToCelcius = (kelvin) => {
  return kelvin - 273.15;
};

const ForecastedDays = () => {
  const [data, setData] = useState(null);
  const location = "Ankara";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
            import.meta.env.VITE_WEATHER_API
          }`
        );
        setData(response.data);
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

  // Tarihleri saklamak için bir dizi oluştur
  const dates = data.list.map((item) => item.dt_txt.split(" ")[0]);
  const uniqueDates = [...new Set(dates)];

  // Güncel günü al
  const currentDay = new Date().toISOString().split("T")[0];

  // Veri listesindeki her bir tarih için ortalama değerleri hesapla
  const dailyData = uniqueDates.map((date) => {
    // İlgili günü hariç tut
    if (date === currentDay) {
      return null;
    }

    const filteredData = data.list.filter(
      (item) => item.dt_txt.split(" ")[0] === date
    );

    // Ortalama değerleri hesapla
    const averageTemp =
      filteredData.reduce((acc, curr) => acc + curr.main.temp, 0) /
      filteredData.length;
    const averageMinTemp =
      filteredData.reduce((acc, curr) => acc + curr.main.temp_min, 0) /
      filteredData.length;
    const averageMaxTemp =
      filteredData.reduce((acc, curr) => acc + curr.main.temp_max, 0) /
      filteredData.length;
    const averageWindSpeed =
      filteredData.reduce((acc, curr) => acc + curr.wind.speed, 0) /
      filteredData.length;
    const averageHumidity =
      filteredData.reduce((acc, curr) => acc + curr.main.humidity, 0) /
      filteredData.length;
    const weatherIds = filteredData.reduce((acc, curr) => {
      if (!acc.includes(curr.weather[0].id)) {
        acc.push(curr.weather[0].id);
      }
      return acc;
    }, []);

    return {
      date,
      averageTemp,
      averageMinTemp,
      averageMaxTemp,
      averageWindSpeed,
      averageHumidity,
      weatherIds,
    };
  });

  return (
    <div className="forecast-container">
      {dailyData.map((data) => {
        if (data === null) {
          return null;
        }
        return (
          <div className="forecast-item" key={data.date}>
            <h3>{data.date}</h3>

            <div className="forecast-description">
              <table className="table-class">
                <thead>
                  <tr>
                    <th>
                      <img src="/img/forecasticons/temp.png" alt="" />
                    </th>
                    <th>
                      <img src="/img/forecasticons/min.png" alt="" />
                    </th>
                    <th>
                      <img src="/img/forecasticons/max.png" alt="" />
                    </th>
                    <th>
                      <img src="/img/forecasticons/windock.png" alt="" />
                    </th>
                    <th>
                      <img src="/img/forecasticons/humidity.png" alt="" />
                    </th>
                    <th>Hava Durumu Kimliği:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {kelvinToCelcius(data.averageTemp).toFixed(0)}°C</td>
                    <td>
                      {kelvinToCelcius(data.averageMinTemp).toFixed(0)}
                      °C
                    </td>
                    <td>
                      {kelvinToCelcius(data.averageMaxTemp).toFixed(0)}
                      °C
                    </td>
                    <td>{data.averageWindSpeed.toFixed(2)} m/s</td>
                    <td>{data.averageHumidity.toFixed(2)}%</td>
                    <td>{data.weatherIds.join(", ")}</td>
                  </tr>
                </tbody>
              </table>
              {/* <div className="forecast-temperatures">
                <span>
                  <img src="/img/forecasticons/temp.png" alt="" />
                  {kelvinToCelcius(data.averageTemp).toFixed(0)}°C
                </span>
                <span>
                  <img src="/img/forecasticons/min.png" alt="" />
                  {kelvinToCelcius(data.averageMinTemp).toFixed(0)}
                  °C
                </span>
                <span>
                  <img src="/img/forecasticons/max.png" alt="" />
                  {kelvinToCelcius(data.averageMaxTemp).toFixed(0)}
                  °C
                </span>
                <span>
                  <img src="/img/forecasticons/windock.png" alt="" />
                  {data.averageWindSpeed.toFixed(2)} m/s
                </span>

                <span>
                  <img src="/img/forecasticons/humidity.png" alt="" />
                  {data.averageHumidity.toFixed(2)}%
                </span>
                <span>Hava Durumu Kimliği: {data.weatherIds.join(", ")}</span>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastedDays;
