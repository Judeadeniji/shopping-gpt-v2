import React, { useRef } from "react";
import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  const header = useRef();
  window.addEventListener("scroll", () => {
    if (scrollY > 80) {
      // header.current.style.boxShadow = "0 1.5px 8px rgba(0,0,0,0.12)";
      header.current.style.boxShadow = "0 1.5px 8px rgba(54, 79, 199, 0.25)";
    } else if (scrollY === 0) {
      header.current.style.boxShadow = "0";
    }
  });
  return (
    <header ref={header}>
      <NavBar />
    </header>
  );
};

export default Header;
