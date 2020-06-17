import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Mandala.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={Logo}
            alt="Mandala Logo"
            style={{
              width: "8rem",
              height: "8rem",
              margin: "auto",
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
