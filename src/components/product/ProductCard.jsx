import { useContext } from "react";
import "./ProductCard.css";
import { v4 as uuidv4 } from "uuid";
import { CartNumbersContext } from "../../contexts/CartNumbersContext";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, succMsg }) => {
  //
  const navigate = useNavigate();
  //
  const { cartItems, setCartItems } = useContext(CartNumbersContext);

  //
  const saveCartItems = () => {
    const saveItems = [
      ...cartItems,
      {
        title: product.title,
        id: product.id,
        img: product.image,
        desc: product.description,
        price: product.price,
        ratingNum: product.rating.rate,
        reviewNum: product.rating.count,
        category: product.category,
      },
    ];
    succMsg.current.classList.add("toggleSuccMsg");
    setCartItems(saveItems);
    setTimeout(() => {
      succMsg.current.classList.remove("toggleSuccMsg");
    }, 2000);
    //
  };
  // set product title limit
  const titleLimit = 20;
  const truncateTitle = (title) => {
    if (title.length > titleLimit) {
      let slicedTitle = title.slice(0, titleLimit);
      return slicedTitle + "...";
    }
    return title;
  };
  //
  // console.log(cartItems);
  // product review star display
  const productReviewStar = [1, 2, 3, 4, 5].map((rate) => (
    <span key={uuidv4()}>
      {product.rating.rate === rate + 0.5 ? (
        <FaStarHalfAlt className="review__star" />
      ) : product.rating.rate >= rate ? (
        <FaStar className="review__star" />
      ) : (
        <FaRegStar className="review__star" />
      )}
    </span>
  ));
  //
  return (
    <div className="product__card">
      <div className="product__card__image">
        <img src={product.image} alt="" className="product__card__img" />
      </div>
      <div className="product__card__context">
        <div className="product__card__price">${product.price}</div>
        <div className="product__card__title">
          {truncateTitle(product.title)}
        </div>
        <div className="product__card__reviewAndBtn">
          <div className="product__card__review">
            {productReviewStar}
            <div className="product__card__reviews">
              {product.rating.rate}&nbsp;Reviews
            </div>
          </div>
          <button
            className="product__card__btn"
            onClick={() => saveCartItems(product.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
