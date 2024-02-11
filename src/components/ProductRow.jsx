function ProductRow({ product }) {
  const { name, price, inStock} = product;
  return (
    <tr>
      <td style={{ color: inStock ? "black" : "red" }}>{name}</td>
      <td>{price}</td>
      <td>{inStock ? "Yes" : "No"}</td>
    </tr>
  );
}

export default ProductRow;