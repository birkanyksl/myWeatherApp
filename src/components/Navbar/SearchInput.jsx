import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="text"
        placeholder="Bir şehir giriniz."
      />
      <button className="search-button">Ara</button>
    </div>
  );
};

export default SearchInput;
