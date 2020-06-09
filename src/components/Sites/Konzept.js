import React, { useEffect } from "react";

const Sprachkita = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Unser Konzept");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Sprachkita;
