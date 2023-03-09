import React from "react";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import linkedin from "../images/linkedin.svg";

export default function Contact() {
  return (
    <div className="container contact" id="contact">
      <h2>Contact</h2>
      <p className="info_text">
        I would prefer you to contact me on either Discord, Twitter or LinkedIn.
      </p>
      <div className="container">
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
              href="https://twitter.com/eplewastaken"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitter} alt="twitter" id="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erlend-s-2206ab159/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" id="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <p className="info_text">
        If you don't want to use any on the above, here is my personal email:
      </p>
      <details aria-label="show email">
        <summary>Email:</summary>
        <p className="info_text">epledev@outlook.com</p>
      </details>
    </div>
  );
}
