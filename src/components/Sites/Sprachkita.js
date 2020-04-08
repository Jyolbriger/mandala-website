import React, { useEffect } from "react";

const Sprachkita = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Sprach-Kita");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Sprachkita;
