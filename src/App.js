import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Routing from "./components/Navigation/Routing";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routing />
      </div>
    </BrowserRouter>
  );
};

export default App;
