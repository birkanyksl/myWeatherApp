/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  setWeatherData,
  setForecastData,
  setLoading,
  setError,
} from "../../store/redux";
import axios from "axios";
import Modal from "../ErrorModal/Modal";
import "./SearchInput.css";
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;

const SearchInput = () => {
  const [location, setLocation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const fetchData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}`
      );

      return response.data;
    } catch (error) {
      throw new Error(
        "Location not found. Please check your information and try again."
      );
    }
  };

  const fetchForecast = async (location) => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${VISUALCROSSING_API_KEY}`
      );

      return response.data;
    } catch (error) {
      throw new Error(
        "Location not found. Please check your information and try again."
      );
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
      dispatch(setError(error.message));
      setIsModalOpen(true);
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
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{error}</p>
      </Modal>
    </div>
  );
};

export default SearchInput;
