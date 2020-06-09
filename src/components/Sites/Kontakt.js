import React, { useEffect } from "react";

const Kontakt = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Kontaktieren Sie uns gerne", "var(--mred-color)");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Kontakt;
