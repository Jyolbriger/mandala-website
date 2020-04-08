import React, { useEffect } from "react";

const Datenschutz = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Datenschutzerklärung");
    // eslint-disable-next-line
  }, []);

  return <div>Datenschutz</div>;
};

export default Datenschutz;
