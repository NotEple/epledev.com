import React from "react";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <ul className="footer_container">
        <li>
          <a
            href="https://discordapp.com/users/195228341970796544"
            target="_blank"
            rel="noopener noreferrer">
            <img src={discord} alt="discord" id="discord" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/noteple"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitter} alt="eplewastaken twitter" id="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/erlend-s-2206ab159/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin} alt="epledev linkedin" id="linkedin" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
