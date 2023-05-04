import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import "./ProductItems.css";
import loaderGif from "../../assets/images/loader.gif";

const ProductItems = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  return (
    <section className="product__items">
      {isLoading && <img src={loaderGif} className="display__loading" />}
      {error && (
        <div src={loaderGif} className="display__error">
          {error}
        </div>
      )}
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </section>
  );
};

export default ProductItems;
