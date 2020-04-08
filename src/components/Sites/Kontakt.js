import React, { useEffect } from "react";

const Kontakt = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Kontakt");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Kontakt;
