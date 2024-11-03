import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardFive = (props) => {
  const ssss = useNavigate();

  return (
    <div className="container my-2 d-lg-flex">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6  product-card p-3 border rounded shadow-sm">
          <div className="row">
            {/* Product Image */}
            <div className="col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <img src={props.img} />
            </div>

            {/* Product Details */}
            <div className="col-12 col-md-6">
              <h2 className="product-title h5">{props.titleText}</h2>
              <div className="product-rating mb-2">
                <span>⭐⭐⭐⭐⭐</span> <span>371</span>
                <p className="mb-1">{props.Review}</p>
              </div>
              <div className="product-price mb-2">
                <span className="current-price fw-bold">{props.Taka}</span>{" "}
                <span className="per-item">($81.71/Item)</span>
                <span className="original-price text-muted text-decoration-line-through">
                  {" "}
                  List: $399.99
                </span>
              </div>
              <p className="delivery mb-1">Delivery Tue, Nov 12</p>
              <p className="shipping-info mb-1">Ships to Bangladesh</p>
              <p className="sustainability mb-2">1 sustainability feature 🌱</p>
              <button
                className="btn btn-primary w-100 mb-2"
                onClick={() => ssss("/ProductPage")}
              >
                Order Now
              </button>
              <p className="more-buying-choices">
                More Buying Choices{" "}
                <span className="text-primary">$281.15</span> (3 used & new
                offers)
              </p>
              <div className="color-options d-flex">
                <span className="color-option black me-2" />
                <span className="color-option white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFive;
