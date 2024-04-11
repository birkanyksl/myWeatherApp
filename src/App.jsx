import { useState } from "react";
import "./App.css";

import axios from "axios";
import Navbar from "./components/AppHeader/Navbar";
import Main from "./components/AppBody/Main";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
          import.meta.env.VITE_WEATHER_API
        }`
      );
      setWeatherData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //Günlük data forecast olarak openweatherdan alamadığım için 2. bir api kullanıldı.
  const fetchForecast = async (location) => {
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

  // if (location) {
  //   fetchForecast();
  // }

  return (
    <div className="App">
      <Navbar
        fetchData={fetchData}
        weatherData={weatherData}
        fetchForecast={fetchForecast}
      />
      <Main
        weatherData={weatherData}
        fetchData={fetchData}
        data={data}
        fetchForecast={fetchForecast}
      />
    </div>
  );
}

export default App;
