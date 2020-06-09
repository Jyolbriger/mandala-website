import React, { useEffect } from "react";

const Neuigkeiten = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Neuigkeiten", "var(--morange-color)");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Neuigkeiten;
