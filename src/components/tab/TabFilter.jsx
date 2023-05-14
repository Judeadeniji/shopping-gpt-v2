import React from "react";
import "./TabFilter.css";
import TabFilterForm from "./TabFilterForm";
import { HiOutlineChevronDown } from "react-icons/hi";

const TabFilter = () => {
  return (
    <div className="tabFilter__container">
      <div className="catToggle">
        <p>Filter</p>
        <HiOutlineChevronDown />
      </div>
      <div className="tabFilter__box">
        <h2 className="tabFilter__h2">Filter Products</h2>
        <TabFilterForm />
      </div>
    </div>
  );
};

export default TabFilter;
