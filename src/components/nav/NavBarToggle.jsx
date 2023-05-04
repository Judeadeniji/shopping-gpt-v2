import React from "react";
import "./NavBarToggle.css";

const NavBarToggle = ({
  handleToggleNav,
  burgerOne,
  burgerTwo,
  burgerThree,
}) => {
  return (
    <div className="hamburger" onClick={handleToggleNav}>
      <div className="burger burger__one" ref={burgerOne}></div>
      <div className="burger burger__two" ref={burgerTwo}></div>
      <div className="burger burger__three" ref={burgerThree}></div>
    </div>
  );
};

export default NavBarToggle;
