import { useState, useEffect } from "react";
import { MobileNav, MediaLinks } from "../features/NavMenu";

function Header() {
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
      console.log();
      const headerHeight = document.querySelector(".header").clientHeight;
      const translateYValue = section.id === "#projects" ? 10 * 16 : 8 * 10;
      const scrollPosition = section.offsetTop - headerHeight - translateYValue;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  function handleOpenNav() {
    setNavIsOpen(!openNav);
  }
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      handleOpenNav();
    }
  };
  return (
    <section className="section-header" id="#header">
      <header className="header">
        <h1 className="main-logo">
          <a onClick={() => scrollToSection("#header")} href="#header">
            runpy21
          </a>
        </h1>

        <div className={`${openNav ? "nav-mobile" : "nav"}`}>
          <ul className="nav-links">
            <li className="nav-item" onClick={handleClick}>
              <a
                className="nav-link"
                href="#projects"
                onClick={() => scrollToSection("#projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <a
                className="nav-link"
                href="#technologies"
                onClick={() => scrollToSection("#technologies")}
              >
                Technologies
              </a>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <a
                className="nav-link"
                href="#about-me"
                onClick={() => scrollToSection("#about-me")}
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

export default Header;
