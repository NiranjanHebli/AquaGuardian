import React, { useState } from 'react';
import './Slideshow.css';
import Button from '../Button/Button';
import img1 from './img2c.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3];
// const images=[img1];

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slideshow">
      <div className="slideshow-image">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="slideshow-controls">
        <Button text="Prev" onClick={handlePrev}/>
        <Button text="Next" onClick={handleNext}/>
      </div>
    </div>
  );
};

export default Slideshow;