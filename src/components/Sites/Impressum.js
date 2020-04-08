import React, { useEffect } from "react";

const Impressum = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Impressum");
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Impressum;
