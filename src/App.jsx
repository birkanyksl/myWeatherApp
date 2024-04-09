import { useState } from "react";
import "./App.css";

import axios from "axios";
import Navbar from "./components/AppHeader/Navbar";
import Main from "./components/AppBody/Main";

function App() {
  const [weatherData, setWeatherData] = useState(null);
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

  return (
    <>
      <Navbar fetchData={fetchData} />
      <Main weatherData={weatherData} />
    </>
  );
}

export default App;
