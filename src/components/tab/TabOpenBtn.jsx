import React from "react";
import "./TabOpenBtn.css";

const TabOpenBtn = ({ openTab }) => {
  return <i className="fas fa-bars tab__open" onClick={openTab} />;
};

export default TabOpenBtn;
