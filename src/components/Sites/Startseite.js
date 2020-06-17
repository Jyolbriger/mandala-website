import React, { useEffect } from "react";
import Card from "../Helpers/Card";
import Carousel from "../Helpers/Carousel";

const Startseite = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner(
      "Willkommen auf der Website der Kita Mandala",
      "var(--mdarkblue-color)"
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Carousel />
      <Card />
    </div>
  );
};

export default Startseite;
