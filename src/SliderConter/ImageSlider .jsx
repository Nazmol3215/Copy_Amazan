import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,  // Shows navigation dots at the bottom
    infinite: true,  // Enables infinite scrolling
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Number of slides visible at a time
    slidesToScroll: 1,  // Number of slides to scroll at once
    autoplay: true,  // Enables automatic slide show
    autoplaySpeed: 3000,  // Slide transition delay
  };

  const images = [
'logo192.png',
'lop18.jpg',
'logo192.png',




  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
