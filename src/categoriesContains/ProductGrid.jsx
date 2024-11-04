import React from "react";
import fbdxbfd from '../imagesAll/lop2.jpg';
import fbdxbfd1 from '../imagesAll/momail2.jpg';
import fbdxbfdw from '../imagesAll/m8.webp';
import fbdxbfd3 from '../imagesAll/8.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const ProductGrid = () => {

  const products = [
    {
      title: "Most-loved picks for you in foundation makeup",
      description: "Lancôme Dual Finish Multi-tasking Longwear Powder Foundation - Matte Finish - Long-wearing...",
      price: "$39.78",
      listPrice: "$52.00",
      img: fbdxbfd, // Default main image
      options: [
        fbdxbfd1,
        fbdxbfdw ,
        fbdxbfd3,
        fbdxbfd1 ,
      ],
    },
    {
      title: "Everyday essentials for you",
      description: "LAURA GELLER NEW YORK Baked Balance-N-Glow Illuminating Foundation - Golden Medium - Build...",
      price: "$34.00",
      listPrice: "$36.00",
      img: fbdxbfd3, // Default main image
      options: [
        fbdxbfd1,
        fbdxbfdw ,
        fbdxbfd3,
        fbdxbfd1 ,
      ],
    },
  ];

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  // State to manage the current main image
  const [mainImage, setMainImage] = useState(product.img);

  // Function to handle image click and change the main image
  const handleImageClick = (imagePath) => {
    setMainImage(imagePath);
  };
  const navigateTo = useNavigate();

  return (
    <div className="col-md-6 mb-4"   onClick={() => navigateTo("/OrderComponent")}>
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="text-center">
            <img
              src={mainImage} 
              alt={product.title}
              className="img-fluid mb-3 main-product-image"
              style={{ height: "390px", objectFit: "contain" }}
            />
          </div>
          <p className="card-text small text-muted">{product.description}</p>
          <div className="d-flex align-items-center mb-3">
            <h4 className="mb-0 me-2">{product.price}</h4>
            <span className="text-muted text-decoration-line-through">{product.listPrice}</span>
          </div>
          <div className="d-flex justify-content-start flex-wrap gap-2 mb-3">
            {product.options.map((option, idx) => (
              <img
                key={idx}
                src={option}
                alt={`Option ${idx + 1}`}
                className="option-image border rounded "
                style={{ width: "70px", height: "90px", cursor: "pointer", margin:"12px"}}
                onClick={() => handleImageClick(option)}
              />
            ))}
          </div>
          <a href="#" className="text-primary small">See more</a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
