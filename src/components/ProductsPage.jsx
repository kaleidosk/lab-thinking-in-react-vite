import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products,setProducts] = useState(jsonData);
  const [searchResult, setSearchResult] = useState("");
  const [inStockCheck, setInStockCheck] = useState(false);

  const handleSearch = (wordTyped) => {
    setSearchResult(wordTyped);
  };

  const handleInStockChange = (isChecked) => {
    setInStockCheck(isChecked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar 
        setSearchResult={setSearchResult}
        handleSearch={handleSearch}
        inStockCheck={inStockCheck}
        setInStockCheck={setInStockCheck}/>
      <ProductTable
        products={products}
        searchResult={searchResult}
        inStockCheck={inStockCheck}/>
    </div>
  );
}

export default ProductsPage;