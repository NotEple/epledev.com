import React from "react";
import Logo from "../images/EpleDev.png";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/projects" activeclassname="active" className="nav__link">
          Projects
        </NavLink>
        <Link to="/">
          <img src={Logo} className="logo" alt="Eple Dev" />
        </Link>
        <NavLink to="/contact" activelassname="active" className="nav__link">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
