import React, { useEffect, useState, Fragment } from "react";
import Haus from "./Mandala_Haus";
import Cinema from "./Cinema";

const Galerie = ({ changeBanner }) => {
  useEffect(() => {
    changeBanner("Das sind Wir", "var(--mgreen-color)");
    // eslint-disable-next-line
  }, []);

  const [url, seturl] = useState("https://www.youtube.com/embed/1toVDr9dYbM");

  const changeUrl = (newUrl) => seturl(newUrl);

  return (
    <div className="container">
      <h1>Klicken sie auf eine unserer Etagen um mehr zu erfahren</h1>
      <div className="stageVids">
        <Haus changeUrl={changeUrl} />
        <Cinema url={url} />
      </div>
    </div>
  );
};

export default Galerie;
