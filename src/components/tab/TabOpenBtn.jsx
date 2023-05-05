import React from "react";
import "./TabOpenBtn.css";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const TabOpenBtn = ({ openTab }) => {
  return <HiOutlineBars3BottomRight className="tab__open" onClick={openTab} />;
};

export default TabOpenBtn;
