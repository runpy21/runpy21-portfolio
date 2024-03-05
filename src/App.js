import "./index.css";
import "./queries.css";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import GithubLogo from "./img/mark-github-24.svg";
import LinkedinLogo from "./img/Linkedin.svg";
import FigmaLogo from "./img/Figma.svg";
import Timeline from "./img/timeline.svg";

const technologiesObj = [
  {
    technology: "HTML",
    lvl: "Advanced",
    percentage: "70%",
  },
  {
    technology: "CSS, Sass & Tailwind CSS",
    lvl: "Advanced",
    percentage: "70%",
  },
  {
    technology: "JavaScript, TypeScript, JQuery",
    lvl: "Advanced",
    percentage: "70%",
  },
  {
    technology: "UI design in Figma",
    lvl: "Regular",
    percentage: "45%",
  },
  {
    technology: "MySQL, NanoSQL",
    lvl: "Regular",
    percentage: "45%",
  },
  {
    technology: "React",
    lvl: "Regular",
    percentage: "45%",
  },
  {
    technology: "React Native",
    lvl: "Regular",
    percentage: "45%",
  },
  {
    technology: "Vue.js",
    lvl: "Beginner",
    percentage: "20%",
  },
];

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <SectionAbout />
      <SectionProjects />
      <SectionTechnologies />
      <SectionAdditional />
      <SectionAboutMe></SectionAboutMe>
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <header className="header">
      <Logo />
      <nav className="nav-bar">
        <NavLinks></NavLinks>
      </nav>
      <MediaLinks></MediaLinks>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-text">runpy21</span>
    </div>
  );
}

function NavLinks() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <a
            className="nav-link"
            href="#section--1"
            onClick={() => scrollToSection("#section--1")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="#section--2"
            onClick={() => scrollToSection("#section--2")}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="#section--3"
            onClick={() => scrollToSection("#section--3")}
          >
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
}

function MediaLinks() {
  return <MediaLinksBlock className={"media-links"}></MediaLinksBlock>;
}
function MediaLinksBlock({ className }) {
  return (
    <div className={className}>
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="github" className="icon" />
      </a>
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={LinkedinLogo} alt="github" className="icon" />
      </a>
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={FigmaLogo} alt="github" className="icon" />
      </a>
    </div>
  );
}

function SectionAbout() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`${"section-about"} ${inView ? "" : "section--hidden"}`}
    >
      <div className="about">
        <div className="about-text">
          <h1>Oleksandr Dmytruk</h1>
          <p className="about-description">
            Frontend Developer focused on making websites look great and easy to
            use. I'm dedicated to delivering high-quality work and always eager
            to learn new technologies.
          </p>
        </div>
        <Button className={"btn"}>Let's begin</Button>
        <h2 className="section-project-title">Projects</h2>
        <img
          src={require("./img/drawing.png")}
          alt="drawing"
          className="drawing"
        />
      </div>
    </section>
  );
}

function Button({ children, className, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={className}>{children}</button>
    </a>
  );
}

function SectionProjects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`${"section-projects"} ${inView ? "" : "section--hidden"}`}
      ref={ref}
      id="#section--1"
    >
      <div className="projects">
        <ProjectContainer
          img={require("./img/domkon.png")}
          title={"Домашня кондитерська"}
          btnTitle={"Look it up"}
          link={"https://www.domkondyterska.com.ua/"}
        />
        <ProjectContainer
          img={require("./img/mapty.png")}
          title={"Mapty"}
          btnTitle={"Soon"}
        />
        <ProjectContainer
          img={require("./img/smartspace.png")}
          title={"Smartspace"}
          btnTitle={"Soon"}
        />
        <ProjectContainer
          img={require("./img/bankist.png")}
          title={"Bankist"}
          btnTitle={"Soon"}
        />
      </div>
    </section>
  );
}

function ProjectContainer({ img, title, btnTitle, link }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${"project-container"} ${inView ? "" : "section--hidden"}`}
    >
      <div className="project-img-container">
        <img src={img} alt="Project 1" className="project-img" />
      </div>
      <h3 className="project-title">
        <span>{title}</span>
      </h3>
      <hr className="under-line" />
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button className={"btn-open"} link={link}>
        {btnTitle}
      </Button>
    </div>
  );
}

function SectionTechnologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const techData = technologiesObj;

  return (
    <section
      ref={ref}
      className={`${"section-technologie"} ${inView ? "" : "section--hidden"}`}
      id="#section--2"
    >
      <div className="technologie">
        <h2 className="section-technologie-title">Technologies</h2>
        <div className="section-technologie-bars">
          {techData.map((el) => (
            <TechnologiesBar techObj={el} key={el.technology}></TechnologiesBar>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologiesBar({ techObj }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const percentageStyle = {
    "--techPercentage": techObj.percentage,
  };

  return (
    <div className="technologie-bar-container">
      <div className="bar-titles">
        <p className="bar-technologie-title">{techObj.technology}</p>
        <p className="bar-lvl-title">{techObj.lvl}</p>
      </div>
      <div className="progress-bar-container" ref={ref}>
        <div
          className={`${"progress-bar"} ${inView ? `progress-bar-animated` : ""}
          `}
          style={{ ...percentageStyle }}
        ></div>
      </div>
    </div>
  );
}

function SectionAdditional() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`${"section-additional"} ${inView ? "" : "section--hidden"}`}
    >
      <div className="additional">
        <h2 className="additional-title">Additional technologies and skills</h2>
        <div className="additional-skills-container">
          <ul className="additional-skills">
            <li>Git</li>
            <li>Quick learning</li>
            <li>Agile</li>
          </ul>
          <ul className="additional-skills">
            <li>Wordpress</li>
            <li>Engagement</li>
          </ul>
          <ul className="additional-skills">
            <li>Teamwork</li>
            <li>B2 english</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionAboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`${"section-about-me"} ${inView ? "" : "section--hidden"}`}
      id="#section--3"
    >
      <h2 className="about-me-section-title">About me</h2>

      <div className="timeline-img">
        <div className="container-timeline">
          <div className="rectangle"></div>

          <div className="circle circle1">
            <div className="circle-year">2021</div>
            <div className="circle-text">Lorem Ipsum</div>
          </div>

          <div className="circle circle2">
            <div className="circle-year">2022</div>
            <div className="circle-text">Lorem Ipsum</div>
          </div>

          <div className="circle circle3">
            <div className="circle-year">2023</div>
            <div className="circle-text">Lorem Ipsum</div>
          </div>

          <div className="circle circle4">
            <div className="circle-year">2024</div>

            <div className="circle-text">Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="telegram-link">
        <p>Write me:</p>
        <a href="https://t.me/runpy21" target="__blank" className="telegram">
          @runpy21
        </a>
      </div>
      <div className="telegram-link">
        <p>Email:</p>
        <a href="https://t.me/runpy21" target="__blank" className="gmail">
          devxander21@gmail.com
        </a>
      </div>

      <MediaLinksBlock className={"media-links-footer"}></MediaLinksBlock>
    </section>
  );
}
