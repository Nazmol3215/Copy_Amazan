import React from 'react';
import Slider from 'react-slick';
import sli1 from '../imagesAll/lop2.jpg'
import sli12 from '../imagesAll/momail2.jpg'
import sli13 from '../imagesAll/mobail123.jpg'
import sli14 from '../imagesAll/mob acca11.jpg'
import sli145 from '../imagesAll/mobail123.jpg'

// Sample data for products
const products = [
  { id: 1, name: 'Acer Laptop 1', imgSrc: sli1 },
  { id: 2, name: 'Acer Laptop 2', imgSrc: sli12 },
  { id: 3, name: 'HP Laptop', imgSrc: sli13},
  { id: 4, name: 'Lenovo Laptop', imgSrc: sli14 },
  { id: 5, name: 'Dell Laptop', imgSrc: sli145 },
  // Add more products as needed
];

const ProductSlider = () => {
  const settings = {
    dots: false,               // No dots for navigation
    infinite: true,            // Infinite scrolling
    speed: 500,                // Transition speed
    slidesToShow: 5,           // Number of products shown at once
    slidesToScroll: 1,         // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,     // Adjusts for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,     // Adjusts for small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,     // Adjusts for extra small screens
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <h2>More items to consider <a href="/see-more">See more</a></h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imgSrc} alt={product.name} className="product-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
