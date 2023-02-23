import React from "react";
import { Link } from "react-router-dom";
import Pfp from "../images/pfp.png";
import Languages from "../images/languages.png";
import HTML from "../images/html-hq.png";
import CSS from "../images/css-hq.png";
import JS from "../images/javascript-hq.png";
import REACT from "../images/react.jpeg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="content__container">
          <h2 className="info_header">Who am I?</h2>
          <p className="info_text">
            Hello there and welcome to my website. My name is Erlend and I'm 22
            years old from Bergen, Norway. I've completed my front-end
            development studies at{" "}
            <a
              href="http://noroff.no"
              target="_blank"
              rel="noopener noreferrer">
              Noroff
            </a>{" "}
            - School of Technology after 2 years.
            <br />I have a diploma that can be sent at request.
          </p>
        </section>
        <section className="content__container">
          <div className="portrait_container">
            <img src={Pfp} alt="logo" id="portrait" />
          </div>
          <h2 className="info_header">Why Eple?</h2>
          <p className="info_text">
            Well, my parents didn't really bless me with an international name
            the would be easy to pronounce in english. So I needed something
            easier to use, so I had to come up with a screen name. At the time,
            apples happend to be my favourite fruit. So I chose that as my
            online alias. Creativity: 10/10
          </p>
        </section>
        <section className="content__container">
          <div className="portrait_container">
            <img src={Languages} alt="languages" id="portrait" />
          </div>
          <h2 className="info_header">Languages and tools</h2>
          <div className="languages_container">
            <div className="img">
              <img src={HTML} alt="HTML" id="img" />
              HTML
            </div>
            <div className="img">
              <img src={CSS} alt="CSS" id="img" />
              CSS
            </div>
            <div className="img">
              <img src={JS} alt="javascript" id="img" />
              JS
            </div>
            <div className="img">
              <img src={REACT} alt="REACT" id="img" />
              REACT
            </div>
          </div>
          <p className="info_text">
            I am comfortable with Vanilla HTML, CSS and JS. And my preferred JS
            library is React. I've also used frameworks and tools like Next.js
            Heroku, TypeScript, Strapi.io, Bootstrap, React Bootstrap,
            Cloudinary and the list goes on.
            <br />
            <br />
            But I am always open to learn new stuff C:
          </p>
        </section>
        <Link to="/projects" className="portfolio_btn">
          Portfolio
        </Link>
      </div>
      <Footer />
    </>
  );
}
