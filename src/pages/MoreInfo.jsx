import React, { useContext, useEffect, useState } from "react";
import "./MoreInfo.css";
import { Link, useParams } from "react-router-dom";
import {
  FaStarHalfAlt,
  FaStar,
  FaRegStar,
  FaPlus,
  FaMinus,
  FaInfoCircle,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { QuantityContext } from "../contexts/QuantityContext";
import { ProductContext } from "../contexts/ProductContext";
import loaderGif from "../assets/images/loader.gif";

const MoreInfo = () => {
  //const useParams
  const { id } = useParams();

  // states
  const [product, setProduct] = useState();

  // context states
  const { totalQuantity, handleDecreQuantity, handleIncreQuantity } =
    useContext(QuantityContext);

  //
  const { isLoading, setIsLoading, error, setError } =
    useContext(ProductContext);

  // using useEffect hook to fetch product based on id on page load
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    getProduct();
  }, []);

  // product reviews
  const productReviewStar = [1, 2, 3, 4, 5].map((rate) => (
    <span key={uuidv4()}>
      {product && product.rating.rate === rate + 0.5 ? (
        <FaStarHalfAlt className="review__star" />
      ) : product && product.rating.rate >= rate ? (
        <FaStar className="review__star" />
      ) : (
        <FaRegStar className="review__star" />
      )}
    </span>
  ));

  // rendering the data info to ui
  return (
    <section className="more__info__section">
      {isLoading && <img src={loaderGif} className="display__loading" />}
      {error && <div className="display__error">{error}</div>}
      {product && (
        <div className="product__info__row">
          {/*  */}

          <img src={product.image} alt="" className="product__img" />

          {/*  */}
          <div className="product__context">
            {/*  */}
            <h2 className="product__h2">{product.title}</h2>
            {/*  */}
            <div className="product__category__reviews">
              <div className="product__review">
                <div className="review__and__number">
                  <p>{productReviewStar}</p>
                  <p>{product.rating.rate}</p>
                </div>
              </div>
              <div className="customers">
                Sold to {product.rating.count} customers
              </div>
              <div className="product__category">{product.category}</div>
            </div>
            {/*  */}
            <div className="product__desc">{product.description}</div>
            {/*  */}
            <div className="product__info__price">
              <p className="initial__price">
                ${Math.round(product.price * 10) / 10 + 20.5}
              </p>
              <div className="current__price">${product.price}</div>
            </div>
            {/*  */}
            {/*  */}
            <div className="quantity__note">
              <FaInfoCircle />
              <p>Note, can only add five (5) items per product</p>
            </div>
            <div className="buyNow__quantity">
              {/*  */}
              <div className="product__quantity">
                <button
                  className="quantity__btn quantity__btn__minus"
                  onClick={handleDecreQuantity}
                >
                  <FaMinus className="decre__btn" />
                </button>
                <div className="total__quantity">
                  <div className="total__quantity__number">{totalQuantity}</div>
                </div>
                <button
                  className="quantity__btn quantity__btn__plus"
                  onClick={handleIncreQuantity}
                >
                  <FaPlus className="incre__btn" />
                </button>
              </div>
              {/*  */}
              <Link className="more__info__buy__btn">Buy Now</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoreInfo;
