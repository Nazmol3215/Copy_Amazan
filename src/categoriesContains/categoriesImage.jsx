import React from 'react';
import images44 from '../imagesAll/liop1.jpg';
import images441 from '../imagesAll/lop2.jpg';
import images442 from '../imagesAll/lop44.jpg';


const categories = [
  { name: 'Desktops', imgSrc: images44 },
  { name: 'Laptops', imgSrc: images441 },
  { name: 'Hard Drives', imgSrc: images442 },
  { name: 'PC Accessories', imgSrc: images442 },
  { name: 'Hard Drives', imgSrc: images442 },
  { name: 'PC Accessories', imgSrc: images442 },
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
          </div>
        ))}
      </div>
      {/* <a href="/see-more" className="see-more">See more</a> */}
    </div>
  );
};

export default ProductCard;
