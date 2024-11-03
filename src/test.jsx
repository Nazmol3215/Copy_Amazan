import React, { useState } from "react";
import rdsgfx1 from '../src/imagesAll/1.jpg';
import rdsgfx2 from '../src/imagesAll/2.jpg';
import rdsgfx3 from '../src/imagesAll/3.jpg';
import rdsgfx4 from '../src/imagesAll/4.jpg';
import rdsgfx5 from '../src/imagesAll/6.jpg';
import hoda from "../src/imagesAll/8.jpg";






// Sample image data with titles
const images = [
  { src: hoda ,    title: "Image 1" },
  { src: rdsgfx1 , title: "Cinque" },
  { src: rdsgfx2 , title: "Image 3" },
  { src: rdsgfx3 , title: "Image 4" },
  { src: rdsgfx4 , title: "Image 5" },
  { src: rdsgfx5 , title: "Image 6" },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle thumbnail click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      {/* Main Image Slider */}
      <div className="main-slider">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="  accordion-button"
        />
        <button className="prev-btn" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={goToNextSlide}>
          &#10095;
        </button>
        <div className="image-title">{images[currentIndex].title}</div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.title}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
