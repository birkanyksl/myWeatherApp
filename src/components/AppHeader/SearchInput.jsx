/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ fetchData, fetchForecast }) => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const searchHandler = async () => {
    setIsLoading(true);
    await fetchData(location);
    await fetchForecast(location);
    setIsLoading(false);
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
    </div>
  );
};

export default SearchInput;
