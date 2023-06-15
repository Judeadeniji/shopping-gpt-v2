import React, { useContext, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import "./ProductItems.css";
import loaderGif from "../../assets/images/loader.gif";
import { BsPatchCheckFill } from "react-icons/bs";

const ProductItems = () => {
  // getting data from useFetch hook
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products", { mode: "no-cors" });

  // reference to added to cart success message
  const succMsg = useRef();

  // styling based on if data isi available
  const check__style = !products
    ? { width: "100vw", margin: "0 auto" }
    : { width: "100%", margin: "0", marginBottom: "80px" };

  // displayign the data in user interface
  return (
    <section className="product__items" style={check__style}>
      {isLoading && <img src={loaderGif} className="display__loading" />}
      {error && <div className="display__error">{error}</div>}
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
