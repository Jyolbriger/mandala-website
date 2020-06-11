import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "Hande.jpg",
  "Stricke.jpg",
  "Schaltkreis.jpg",
  "Schnecke.jpg",
  "Verkehrserziehung.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Carousel = () => {
  return (
    <div className='slide-container'>
      <Slide {...properties}>
        <div className='each-slide'>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className='each-slide'>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className='each-slide'>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className='each-slide'>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className='each-slide'>
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;
