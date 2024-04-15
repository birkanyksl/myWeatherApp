/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  setLoading,
  setError,
  setWeatherData,
  setForecastData,
} from "../../store/redux";
import axios from "axios";
import "./SearchInput.css";

const SearchInput = () => {
  const [location, setLocation] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const fetchData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error while fetching weather data ❗ ");
    }
  };

  const fetchForecast = async (location) => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=H9XZ4B674XJH93UPCVSKVUUZJ`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching forecast data ❗");
    }
  };

  const searchHandler = async () => {
    dispatch(setLoading(true));
    try {
      const weatherResponse = await fetchData(location);
      const forecastResponse = await fetchForecast(location);
      dispatch(setWeatherData(weatherResponse));
      dispatch(setForecastData(forecastResponse));
    } catch (error) {
      dispatchEvent(setError(error.message));
    }
    dispatch(setLoading(false));
    setLocation("");
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter a city name"
        onChange={inputChangeHandler}
        value={location}
      />
      <button className="search-button" onClick={searchHandler}>
        {isLoading ? "Searching..." : "Search"}
        {error && <p className="error-message">{error}</p>}
      </button>
    </div>
  );
};

export default SearchInput;
