import React, { useRef } from "react";
import "./NavBar.css";
import NavBarToggle from "./NavBarToggle";

const NavBar = () => {
  const navlinks__row = useRef();
  const burgerOne = useRef();
  const burgerTwo = useRef();
  const burgerThree = useRef();
  const handleToggleNav = () => {
    navlinks__row.current.classList.toggle("toggleNav");
    burgerOne.current.classList.toggle("toggleNav");
    burgerTwo.current.classList.toggle("toggleNav");
    burgerThree.current.classList.toggle("toggleNav");
  };
  document.addEventListener("scroll", () => {
    if (scrollY > 20) {
      navlinks__row.current.style.top = "0";
    } else if (scrollY === 0) {
      navlinks__row.current.style.top = "65px";
    }
  });
  return (
    <nav className="nav">
      <div className="nav__logo">Shopping GPT</div>
      <div className="navlinks__row" ref={navlinks__row}>
        {/* nav livks col 1 */}
        <form className="navlinks__col1">
          <input type="text" placeholder="search product" />
          <button className="search__product__btn">
            <i className="fa-solid fa-magnifying-glass search__product__icon"></i>
          </button>
        </form>
        {/* nav livks col 2 */}
        <div className="navlinks__col2">
          <i className="fa-regular fa-bell nav__icon" />
          <i className="fa-regular fa-user nav__icon" />
          <i className="fa-solid fa-bag-shopping nav__icon__shopping__bag">
            <div className="cart__items__number">{0}</div>
          </i>
        </div>
      </div>
      <NavBarToggle
        handleToggleNav={handleToggleNav}
        burgerOne={burgerOne}
        burgerTwo={burgerTwo}
        burgerThree={burgerThree}
      />
    </nav>
  );
};

export default NavBar;
