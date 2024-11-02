import React from "react";
import { useNavigate } from "react-router-dom";
import DetailsButon from "../OrderDetailsPages/DetailsButon";
import images441 from "../imagesAll/lop2.jpg";
import images442 from "../imagesAll/mobail123.jpg";
import images4421 from "../imagesAll/m5.jpg";
import images4422 from "../imagesAll/m8.webp";
import images4423 from "../imagesAll/mob acca6.jpg";
import images4424 from "../imagesAll/m2.jpg";

const categories = [
  { imgSrc: images442 },
  { imgSrc: images441 },
  { imgSrc: images4421 },
  { imgSrc: images4422 },
  { imgSrc: images4423 },
  { imgSrc: images4424 },
];

const ProductCard = () => {

  return (
    <div className="product-card">
      
      {/* <h2>Score the top PCs & Accessories</h2> */}
      <div className="product-grid">
        {categories.map((category, index) => (
          <div key={index} className="product-item">
            <img src={category.imgSrc} alt={category.name} />
            <p>{category.name}</p>
            <DetailsButon />
          </div>
        ))}
      </div>
      {/* <a href="/see-more" className="see-more">See more</a> */}
    </div>
  );
};

export default ProductCard;
