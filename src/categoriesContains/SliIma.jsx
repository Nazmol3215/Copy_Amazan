import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ght from '../imagesAll/liop1.jpg';
import ght1 from '../imagesAll/mob acca10.jpg';
import ght3 from '../imagesAll/momail2.jpg';



const ProductSliderOne = () => {
  const products = [
    {
      title: "RedThunder K84 Wireless Keyboard and Mouse Combo",
      price: "$39.99",
      rating: "★ ★ ★ ★ ☆",
      delivery: "Wednesday, Nov 13",
      imgSrc: ght // Replace with actual image
    },
    {
      title: "HP 14 Laptop, Intel Celeron N4020, 4GB RAM",
      price: "$176.00",
      rating: "★ ★ ★ ★ ☆",
      delivery: "Thursday, Nov 21",
      imgSrc: ght1
    },
    {
      title: "BlueFinger Wireless Gaming Keyboard and Mouse Combo",
      price: "$34.99",
      rating: "★ ★ ★ ★ ★",
      delivery: "Wednesday, Nov 20",
      imgSrc: ght3
    },
    // Add more products as needed
  ];

  return (
    <Carousel interval={null} controls={true} indicators={false}>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div >
            <div className="card mx-2" style={{ width: '18rem' }}>
              <img src={product.imgSrc} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">{product.rating}</p>
                <p className="card-text">Delivery: {product.delivery}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductSliderOne;
