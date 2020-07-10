import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Routing from "./components/Navigation/Routing";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routing />
      </div>
    </Router>
  );
};

export default App;
