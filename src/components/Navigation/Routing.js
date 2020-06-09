import React, { useState } from "react";
import Neuigkeiten from "../Sites/Neuigkeiten";
import Kontakt from "../Sites/Kontakt";
import Datenschutz from "../Sites/Datenschutz";
import About from "../Sites/About";
import Impressum from "../Sites/Impressum";
import Startseite from "../Sites/Startseite";
import Konzept from "../Sites/Konzept";

import Banner from "./Banner";

import { Switch, Route } from "react-router-dom";

const Routing = () => {
  const [text, setText] = useState("Willkommen");

  const changeBanner = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <Banner text={text} />
      <Switch>
        <div className="container">
          <Route
            exact
            path="/"
            render={() => <Startseite changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/Konzept"
            render={() => <Konzept changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/Neuigkeiten"
            render={() => <Neuigkeiten changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/Kontakt"
            render={() => <Kontakt changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/Datenschutz"
            render={() => <Datenschutz changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/About"
            render={() => <About changeBanner={changeBanner} />}
          ></Route>
          <Route
            exact
            path="/Impressum"
            render={() => <Impressum changeBanner={changeBanner} />}
          ></Route>
        </div>
      </Switch>
    </div>
  );
};

export default Routing;
