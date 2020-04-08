import React, { useEffect } from "react";

const Galerie = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Galerie");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Galerie;
