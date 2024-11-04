import React from "react";
import { useNavigate } from "react-router-dom";


const ProductCardFive = (props) => {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      <div className="product-card">
        {/* Product Image */}
        <div className="product-image">
          <img className="product-img" src={props.img} alt="Product" />
        </div>
        {/* Product Details */}
        <div className="product-details">
          <h2 className="product-title">{props.titleText}</h2>
          <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span> <span>371</span>
            <p>{props.Review}</p>
          </div>
          <div className="product-price">
            <span className="current-price">{props.Taka}</span>
            <span className="per-item">($81.71/Item)</span>
            <span className="original-price">List: $399.99</span>
          </div>
          <p className="delivery">Delivery Tue, Nov 12</p>
          <p className="shipping-info">Ships to Bangladesh</p>
          <p className="sustainability">1 sustainability feature 🌱</p>
          <p className="more-buying-choices">
            More Buying Choices <span className="price">$281.15</span> (3 used & new offers)
          </p>
          <button
            className="order-btn"
            onClick={() => navigate("/ProductPage")}
          >
            Order Now
          </button>
     
        </div>
      </div>
    </div>
  );
};

export default ProductCardFive;
