import React, { useEffect } from "react";

const Neuigkeiten = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Unsere Neuigkeiten");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Neuigkeiten;
