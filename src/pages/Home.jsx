import React from "react";
import ProductItems from "../components/product/ProductItems";
import "./Home.css";
import TabFilter from "../components/tab/TabFilter";

const Home = () => {
  return (
    <div className="product__row">
      <TabFilter />
      <ProductItems />
    </div>
  );
};

export default Home;
