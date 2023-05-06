import { useContext, useState } from "react";
import { CartNumbersContext } from "../../contexts/CartNumbersContext";
import "./CartItems.css";
import { FaRegTimesCircle } from "react-icons/fa";
import CartItemDetails from "./CartItemDetails";

const CartItems = () => {
  //
  const { openCart, cartItems } = useContext(CartNumbersContext);

  return (
    <section className="cartItem__wrapper">
      <div className="cartItem__header">
        <h2 className="cartItem__h2">Cart Items</h2>
        <FaRegTimesCircle className="cartItem__closeBtn" onClick={openCart} />
      </div>
      <div className="cartDetailsWrapper">
        {cartItems.length === 0 ? (
          <div className="empty__cart">Cart Is Empty!</div>
        ) : (
          <CartItemDetails />
        )}
      </div>
    </section>
  );
};

export default CartItems;
