/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ fetchData }) => {
  const [location, setLocation] = useState("");

  const inputChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const searchHandler = () => {
    fetchData(location);
    setLocation("");
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="text"
        placeholder="Bir şehir giriniz."
        onChange={inputChangeHandler}
        value={location}
      />
      <button className="search-button" onClick={searchHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
