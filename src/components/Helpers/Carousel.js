import React from "react";

import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles.scss";

const Carousel = () => {
  return (
    <div className="carousel">
      <AwesomeSlider
        className="carousel"
        cssModule={AwsSliderStyles}
        fillParent={true}
      >
        <div data-src="Hande.jpg" />
        <div data-src="Verkehrserziehung.jpg" />
        <div data-src="Schnecke.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Carousel;
