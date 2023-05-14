import React, { useContext, useRef } from "react";
import "./TabFilter.css";
import TabFilterForm from "./TabFilterForm";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RefContext } from "../../contexts/RefContext";

const TabFilter = ({ close__overlay }) => {
  const { filter__box, cat__toggle } = useContext(RefContext);
  const handleFilterTabToggle = () => {
    filter__box.current.classList.toggle("toggleFilterTab");
    cat__toggle.current.classList.toggle("toggleFilterTab");
    close__overlay.current.style.opacity = "1";
    close__overlay.current.style.visibility = "visible";
    close__overlay.current.style.pointerEvents = "all";
  };
  return (
    <div className="tabFilter__container">
      <div
        className="catToggle"
        ref={cat__toggle}
        onClick={handleFilterTabToggle}
      >
        <p>Filter</p>
        <HiOutlineChevronDown />
      </div>
      <div className="tabFilter__box" ref={filter__box}>
        <h2 className="tabFilter__h2">Filter Products</h2>
        <TabFilterForm />
      </div>
    </div>
  );
};

export default TabFilter;
