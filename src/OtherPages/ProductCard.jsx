import React from 'react';



const ProductCard = (props) => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 product-card p-3 border rounded shadow-sm">
          <div className="row">
            {/* Product Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <img
                src={props.img}
                alt="Mini Bonsai Zade Plant PL-001"
                className="product-image img-fluid"
              />
            </div>

            {/* Product Details */}
            <div className="col-12 col-md-6">
              <h2 className="product-title h5">
                SAMSUNG Galaxy A35 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Rugged Design, US Version
              </h2>
              <div className="product-rating mb-2">
                <span>⭐⭐⭐⭐⭐</span> <span>371</span>
                <p className="mb-1">4K+ bought in past month</p>
              </div>
              <div className="product-price mb-2">
                <span className="current-price fw-bold">$326.84</span>{' '}
                <span className="per-item">($81.71/Item)</span>
                <span className="original-price text-muted text-decoration-line-through"> List: $399.99</span>
              </div>
              <p className="delivery mb-1">Delivery Tue, Nov 12</p>
              <p className="shipping-info mb-1">Ships to Bangladesh</p>
              <p className="sustainability mb-2">1 sustainability feature 🌱</p>
              <button className="btn btn-primary w-100 mb-2">Add to Cart</button>
              <p className="more-buying-choices">
                More Buying Choices <span className="text-primary">$281.15</span> (3 used & new offers)
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

export default ProductCard;
