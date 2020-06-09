import React, { useEffect } from "react";
import Card from "../Helpers/Card";
import Carousel from "../Helpers/Carousel";

const Startseite = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Willkommen", "var(--mdarkblue-color)");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="startcontainer">
      <Carousel />
      <Card />
    </div>
  );
};

export default Startseite;
