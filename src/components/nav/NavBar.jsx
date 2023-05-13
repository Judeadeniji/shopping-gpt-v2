import React, { useContext, useRef, useState } from "react";
import "./NavBar.css";
import NavBarToggle from "./NavBarToggle";
import { CartNumbersContext } from "../../contexts/CartNumbersContext";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {
    data: products,
    setData,
    handleFilterProduct,
    searchText,
    setSearchText,
  } = useContext(ProductContext);
  //
  const { cartItems, cartOpen, openCart } = useContext(CartNumbersContext);
  //

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
    <nav>
      <Link to="/" className="nav__logo">
        Shopping GPT
      </Link>
      <div className="navlinks__row" ref={navlinks__row}>
        {/* nav livks col 1 */}
        <form className="navlinks__col1" onSubmit={handleFilterProduct}>
          <input
            type="text"
            placeholder="search product"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search__product__btn">
            <RiSearchLine className="search__product__icon" />
          </button>
        </form>
        {/* nav livks col 2 */}
        <div className="navlinks__col2">
          <IoNotifications className="nav__icon" />
          <FaUserAlt className="nav__icon" />
          <div className="nav__icon__shopping__bag" onClick={openCart}>
            <BsCart4 />
            <div className="cart__items__number">{cartItems.length}</div>
          </div>
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
