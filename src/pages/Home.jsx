import React, { useRef, useContext } from "react";
import ProductItems from "../components/product/ProductItems";
import "./Home.css";
import TabFilter from "../components/tab/TabFilter";
import { RefContext } from "../contexts/RefContext";

const Home = () => {
  const close__overlay = useRef();
  const { filter__box, cat__toggle } = useContext(RefContext);
  const handleCloseOverlay = () => {
    filter__box.current.classList.remove("toggleFilterTab");
    cat__toggle.current.classList.remove("toggleFilterTab");
    close__overlay.current.style.opacity = "0";
    close__overlay.current.style.visibility = "hidden";
    close__overlay.current.style.pointerEvents = "none";
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 808) {
      filter__box.current.classList.remove("toggleFilterTab");
      cat__toggle.current.classList.remove("toggleFilterTab");
      close__overlay.current.style.opacity = "0";
      close__overlay.current.style.visibility = "hidden";
      close__overlay.current.style.pointerEvents = "none";
    }
  });
  return (
    <div className="product__row">
      <TabFilter close__overlay={close__overlay} />
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
