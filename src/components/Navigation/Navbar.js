import React from "react";
import { Link } from "react-router-dom";

import Logo from "./MandalaLogo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={Logo}
            alt="Mandala Logo"
            style={{ width: "80px", height: "80px" }}
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Startseite</Link>
          </li>
          <li>
            <Link to="/Sprach-Kita">Sprach-Kita</Link>
          </li>
          <li>
            <Link to="/Neuigkeiten">Unsere Neuigkeiten</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/Datenschutz">Datenschutzerklärung</Link>
          </li>
          <li>
            <Link to="/Galerie">Datenschutzerklärung</Link>
          </li>
          <li>
            <Link to="/Impressum">Impressum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
