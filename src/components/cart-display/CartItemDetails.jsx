import React, { useContext } from "react";
import { CartNumbersContext } from "../../contexts/CartNumbersContext";
import "./CartItemDetails.css";
import { v4 as uuidv4 } from "uuid";

const CartItemDetails = () => {
  const { cartItems: products, setCartItems } = useContext(CartNumbersContext);
  const removeCartItem = (id) => {
    const newCartItems = products.filter((product) => product.id !== id);
    setCartItems(newCartItems);
  };
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
    </div>
  );
};

export default CartItemDetails;
