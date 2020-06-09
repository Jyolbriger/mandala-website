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
            style={{
              width: "100px",
              height: "100px",
              margin: "1.5rem",
            }}
          />
        </Link>
        <ul>
          <li>
            <Link style={{ backgroundColor: "var(--mdarkblue-color)" }} to="/">
              Startseite
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: "var(--mblue-color)" }}
              to="/Konzept"
            >
              Konzept
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: "var(--mgreen-color)" }}
              to="/About"
            >
              Über Uns
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: "var(--morange-color)" }}
              to="/Neuigkeiten"
            >
              Neuigkeiten
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: "var(--mred-color)" }}
              to="/Kontakt"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: "var(--mpurple-color)" }}
              to="/intern"
            >
              Intern
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
