import React from "react";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <div className="container" id="projects">
        <h1 className="projects_header">Projects</h1>
        <p className="projects_paragraph">
          All of the projects below is the best looking websites I've made. They
          should all be responsive for desktop, tablet and phone.
        </p>

        <section className="project_container">
          <details open>
            <summary>Project Exam 2 / Holidaze</summary>
            <p className="info_text">
              Holidaze was my last project in school before the end of my
              studies. I'm really happy with how it turned out, but there is a
              lot of things I would change now that I am done with it and I've
              looked overt it a couple of times.
            </p>
            <iframe
              src="https://holidazeresort.netlify.app/"
              height="600"
              title="holidaze"></iframe>
            <a href="https://holidazeresort.netlify.app/">Proceed to website</a>
            <a href="https://github.com/EpleWasTaken/holidaze">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>HTML & CSS assignment / ConsciousCoffee</summary>
            <p className="info_text">
              This is by far my favourite design I've ever come up with. It's
              the most proffesional one I've ever made. And it is honestly
              something I've considered to continue to develop and possibly sell
              if I find someone who would be interested.
            </p>
            <iframe
              src="https://consciouscoffee.netlify.app/"
              allowtransparency="true"
              style={{ background: "white" }}
              height="600"
              title="consciouscoffee"></iframe>
            <a href="https://consciouscoffee.netlify.app/">
              Proceed to website
            </a>
            <a href="https://github.com/EpleWasTaken/html-css-resit">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>Semester Project 2 / Bergen Shoe Shop</summary>
            <p className="info_text">
              This was my before christmas assignment. Didn't really go so well,
              but I think it looks decent. There are thing that I want to change
              but haven't had the time to do so.
            </p>
            <iframe
              src="https://bergenshoeshop.epledev.com/"
              height="600"
              title="bergen shoe shop"></iframe>
            <a href="https://bergenshoeshop.epledev.com/">Proceed to website</a>
            <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-EpleWasTaken/tree/main/epledev-js-ca">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>Semester Project / Community Science Museum</summary>
            <p className="info_text">
              This was the absolute first project I made as soon as we learned
              some HTML and CSS. Looking back at it, damn it's ugly. I've come a
              long way.
            </p>
            <iframe
              src="https://csmuseum.netlify.app"
              height="600"
              title="Community Science Museum"></iframe>
            <a href="https://csmuseum.netlify.app">Proceed to website</a>
            <a href="https://github.com/EpleWasTaken/Semester-Project">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>Design / Home Decor</summary>
            <p className="info_text"></p>
            <iframe
              src="https://homedecor-no.netlify.app"
              height="600"
              title="Home Decor"></iframe>
            <a href="https://homedecor-no.netlify.app">Proceed to website</a>
            <a href="https://github.com/EpleWasTaken/erlend-svanevik-design2-ma1">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>Design / Rainy Days</summary>
            <p className="info_text">
              Old domain that I no longer own that I used as CMS, so the
              man/woman page is not working.
            </p>
            <iframe
              src="https://rainydaystest.netlify.app/"
              height="600"
              title="Rainy Days"></iframe>
            <a href="https://rainydaystest.netlify.app/">Proceed to website</a>
            <a href="https://github.com/EpleWasTaken/RainyDays">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <details>
            <summary>Project Exam 1 / Eple's Blog</summary>
            <p className="info_text">
              Old domain that I no longer own that I used as CMS, all images are
              not working.
            </p>
            <iframe
              src="https://eplesblog.netlify.app/"
              height="600"
              title="Eple's Blog"></iframe>
            <a href="https://eplesblog.netlify.app/">Proceed to website</a>
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-EpleWasTaken">
              GitHub Repository
            </a>
          </details>
        </section>

        <section className="project_container">
          <summary>
            I have some random stuff on my{" "}
            <a
              href="http://github.com/eplewastaken"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>{" "}
            as well if you want to take a look.
          </summary>
        </section>
      </div>
    </>
  );
}
