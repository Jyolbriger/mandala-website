import React, { useEffect } from "react";
import Card from "../Helpers/Card";

const Startseite = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Willkommen", "var(--mdarkblue-color)");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-center">
      <Card />
    </div>
  );
};

export default Startseite;
