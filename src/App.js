import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import Navbar from "./components/Navigation/Navbar";
import Routing from "./components/Navigation/Routing";

const App = () => {
  const checkPassword = (e) => {
    /*   let pw = e.target.value;
  if (pw === "mandala2000") {*/
    setBody(
      <div>
        <Navbar />
        <Routing />
      </div>
    );
    setTF("");
  };
  //};

  const [body, setBody] = useState(<div></div>);
  const [TF, setTF] = useState(
    <TextField
      onChange={checkPassword}
      id="standard-basic"
      label="Bitte Kundenpasswort angeben"
      type="password"
    />
  );

  return (
    <Router>
      <div className="App">
        {TF}
        {body}
      </div>
    </Router>
  );
};

export default App;
