import React from "react";
import Logo from "../images/EpleDev.png";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <a href="#projects" className="nav__link">
          Projects
        </a>
        <a href="#home">
          <img src={Logo} className="logo" alt="Eple Dev" />
        </a>
        <a href="#contact" className="nav__link">
          Contact
        </a>
      </ul>
    </nav>
  );
}
