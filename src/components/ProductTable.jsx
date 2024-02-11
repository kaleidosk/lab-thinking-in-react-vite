import ProductRow from "./ProductRow";

function ProductTable({ products, searchResult, inStockCheck }) {
  let filteredProducts = products.filter((product) => {
    if (searchResult && !product.name.toLowerCase().includes(searchResult.toLowerCase())) {
      return false;
    }
    if (inStockCheck && !product.inStock) {
      return false;
    }
    return true;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;