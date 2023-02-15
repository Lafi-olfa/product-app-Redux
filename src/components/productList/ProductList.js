import React from "react";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({products}) => {
  return (
    <div id="product-container">
      {products.map((el) => (
        <div id="product-card" key={el.id}>
          <ProductCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
