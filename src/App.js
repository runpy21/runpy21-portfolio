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
  const [openNav, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (openNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openNav]);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  function handleOpenNav() {
    setNavIsOpen(!openNav);
  }

  return (
    <section className="section-header">
      <header className="header">
        <h1 className="main-logo">
          <a href="/">runpy21</a>
        </h1>

        <div className={`${openNav ? "nav-mobile" : "nav"}`}>
          <ul className="nav-links">
            <li className="nav-item" onClick={handleOpenNav}>
              <a
                className="nav-link"
                href="#section--1"
                onClick={() => scrollToSection("#section--1")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={handleOpenNav}>
              <a
                className="nav-link"
                href="#section--2"
                onClick={() => scrollToSection("#section--2")}
              >
                Technologies
              </a>
            </li>
            <li className="nav-item" onClick={handleOpenNav}>
              <a
                className="nav-link"
                href="#section--3"
                onClick={() => scrollToSection("#section--3")}
              >
                About me
              </a>
            </li>
            {openNav ? (
              <div className="links">
                <MediaLinks openNav={openNav}></MediaLinks>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        {openNav ? (
          ""
        ) : (
          <div className="links">
            <MediaLinks openNav={openNav}></MediaLinks>
          </div>
        )}
        <div className="menu-mobile">
          <MobileNav
            handleOpenNav={handleOpenNav}
            openNav={openNav}
          ></MobileNav>
        </div>
      </header>
    </section>
  );
}

function MobileNav({ openNav, handleOpenNav }) {
  return (
    <div className="btn-nav" onClick={handleOpenNav}>
      {openNav ? (
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      ) : (
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      )}
    </div>
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
          <Button className={"btn"}>Let's begin</Button>
          <h2 className="section-project-title">Projects</h2>
        </div>
      </div>
      <img
        src={require("./img/drawing.png")}
        alt="drawing"
        className="drawing"
      />
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
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProjectContainer
          img={require("./img/mapty.png")}
          title={"Mapty"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ProjectContainer
          img={require("./img/smartspace.png")}
          title={"Smartspace"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ProjectContainer
          img={require("./img/bankist.png")}
          title={"Bankist"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
      </div>
    </section>
  );
}

function ProjectContainer({ img, title, btnTitle, link, text }) {
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
      <div className="project-title-container">
        <h3 className="project-title">
          <span>{title}</span>
        </h3>
        <hr className="under-line" />
      </div>
      <div className="project-text-container">
        <p className="project-description">{text}</p>
      </div>
      <div className="project-btn">
        <Button className={"btn-open"} link={link}>
          {btnTitle}
        </Button>
      </div>
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
      <div className="about-me">
        <h2 className="about-me-title">About me</h2>
        <div className="about-me-timeline">
          <div className="container-timeline">
            <div className="rectangle">&nbsp;</div>
            <div className="circle circle1">
              <span className="year">2021</span>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="circle circle2">
              <span className="year">2022</span>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="circle circle3">
              <span className="year">2023</span>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="circle circle4">
              <span className="year">2024</span>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="section-footer">
      <footer className="footer">
        <div className="contacts-link">
          <p>Write me:&nbsp;</p>
          <a href="https://t.me/runpy21" target="__blank" className="telegram">
            @runpy21
          </a>
        </div>
        <div className="contacts-link">
          <p>Email:&nbsp;</p>
          <a
            href="mailto:devxander21@gmail.com"
            target="__blank"
            className="gmail"
          >
            devxander21@gmail.com
          </a>
        </div>

        <MediaLinksBlock className={"media-links-footer"}></MediaLinksBlock>
      </footer>
    </section>
  );
}
