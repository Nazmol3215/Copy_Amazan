import React from 'react';



const categories = [
  { name: 'Desktops', imgSrc: '/path/to/desktop-image.jpg' },
  { name: 'Laptops', imgSrc: '/path/to/laptop-image.jpg' },
  { name: 'Hard Drives', imgSrc: '/path/to/hard-drive-image.jpg' },
  { name: 'PC Accessories', imgSrc: '/path/to/accessories-image.jpg' },
];

const ProductCard = () => {
  return (
    <div className="product-card">
      <h2>Score the top PCs & Accessories</h2>
      <div className="product-grid">
        {categories.map((category, index) => (
          <div key={index} className="product-item">
            <img src={category.imgSrc} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <a href="/see-more" className="see-more">See more</a>
    </div>
  );
};

export default ProductCard;
