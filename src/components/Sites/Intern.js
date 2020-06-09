import React, { useEffect } from "react";

const Intern = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Interner Bereich", "var(--mpurple-color)");
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Intern;
