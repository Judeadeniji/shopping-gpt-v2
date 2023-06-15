import React, { useRef, useContext } from "react";
import ProductItems from "../components/product/ProductItems";
import "./Home.css";
import TabFilter from "../components/tab/TabFilter";
import { RefContext } from "../contexts/RefContext";
import useFetch from "../hooks/useFetch";

const Home = () => {
  // fetching the data from useFetch hook.
  const { data } = useFetch("https://fakestoreapi.com/products");

  // reference to the close overlay toggle.
  const close__overlay = useRef();

  // refs imported from the ref contextApi
  const { filter__box, cat__toggle } = useContext(RefContext);

  // handling the category overlay closing
  const handleCloseOverlay = () => {
    filter__box.current.classList.remove("toggleFilterTab");
    cat__toggle.current.classList.remove("toggleFilterTab");
    close__overlay.current.style.opacity = "0";
    close__overlay.current.style.visibility = "hidden";
    close__overlay.current.style.pointerEvents = "none";
  };

  // resizing the window and make an effect to it
  window.addEventListener("resize", () => {
    if (window.innerWidth > 808) {
      filter__box.current.classList.remove("toggleFilterTab");
      cat__toggle.current.classList.remove("toggleFilterTab");
      close__overlay.current.style.opacity = "0";
      close__overlay.current.style.visibility = "hidden";
      close__overlay.current.style.pointerEvents = "none";
    }
  });

  // rendering the data to the user interfaces
  return (
    <div className="product__row">
      {data && <TabFilter close__overlay={close__overlay} />}
      <ProductItems />
      <div
        className="close__overlay"
        ref={close__overlay}
        onClick={handleCloseOverlay}
      ></div>
    </div>
  );
};

export default Home;
