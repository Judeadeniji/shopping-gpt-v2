import React, { useContext, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import "./ProductItems.css";
import loaderGif from "../../assets/images/loader.gif";
import { BsPatchCheckFill } from "react-icons/bs";

const ProductItems = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products", { mode: "no-cors" });

  const succMsg = useRef();
  return (
    <section className="product__items">
      {isLoading && <img src={loaderGif} className="display__loading" />}
      {error && (
        <div src={loaderGif} className="display__error">
          {error}
        </div>
      )}
      <div className="succMsg" ref={succMsg}>
        <div className="succMsg__text">Item Added To Cart</div>
        <BsPatchCheckFill />
      </div>
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} succMsg={succMsg} />
        ))}
    </section>
  );
};

export default ProductItems;
