
function SearchBar({ setSearchResult, handleSearch, inStockCheck, setInStockCheck }) {
  const handleInputChange = (e) => {
    const wordTyped = e.target.value;
    handleSearch(wordTyped);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setInStockCheck(isChecked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockCheck}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;