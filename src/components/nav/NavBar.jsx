import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">Shopping GPT</div>
      <div className="navlinks__row">
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
            <div className="cart__items__number">{1}</div>
          </i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
