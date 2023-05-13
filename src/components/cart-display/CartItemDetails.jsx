import React, { useContext } from "react";
import { CartNumbersContext } from "../../contexts/CartNumbersContext";
import "./CartItemDetails.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CartItemDetails = () => {
  //
  const navigate = useNavigate();
  //
  const { cartItems: products, setCartItems } = useContext(CartNumbersContext);
  const removeCartItem = (id) => {
    const newCartItems = products.filter((product) => product.id !== id);
    setCartItems(newCartItems);
  };
  // The total amount of the total items in the cart
  const totalPrice = products
    .map((product) => product.price)
    .reduce((accumulator, price) => accumulator + price, 0);
  // returning the total price to the nearest decimal point to avoid too much numbers after decimal point.
  const totalAmount = Math.floor(totalPrice * 10) / 10;
  return (
    <div className="cartDetails__wrapper">
      {products &&
        products.map((product) => (
          <div className="cartDetails__card" key={uuidv4()}>
            <img src={product.img} alt="" className="cartDetails__img" />
            <div className="cartDetails__context">
              <div className="cartDetails__name">{product.title}</div>
              <div className="cartDetails__price">${product.price}</div>
            </div>
            <button
              className="cartDetails__removeBtn"
              onClick={() => removeCartItem(product.id)}
            >
              Remove Item
            </button>
          </div>
        ))}
      <div className="totalPrice__checkOut">
        <div className="cartDetails__totalPrice">
          <h3 className="cartDetails__totalPrrice__h3">Total Price</h3>
          <div className="cartDetails__totalPrice__sum">${totalAmount}</div>
        </div>
        <button className="checkout__btn" onClick={navigate("/")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItemDetails;
