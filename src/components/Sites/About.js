import React, { useEffect } from "react";

const Galerie = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Das sind Wir", "var(--mgreen-color)");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Galerie;
