import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import "./ProductItems.css";

const ProductItems = () => {
  const { data: products } = useFetch("https://fakestoreapi.com/products");
  return (
    <section className="product__items">
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </section>
  );
};

export default ProductItems;
