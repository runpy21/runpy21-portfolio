import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import { useEffect } from "react";

function SectionAbout() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "-157px",
  });

  useEffect(() => {
    !inView
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  }, [inView]);

  return (
    <section ref={ref} className={`${"section-about"} `}>
      <div className="container about">
        <div className="about-text">
          <h1>Oleksandr Dmytruk</h1>
          <p className="about-description fz-3-6">
            Frontend Developer focused on making websites look great and easy to
            use. I'm dedicated to delivering high-quality work and always eager
            to learn new technologies.
          </p>
          <Button className={"btn"} link={"https://t.me/runpy21"}>
            Let's begin
          </Button>
          <h2 className="section-project-title">Projects</h2>
        </div>
      </div>
      <img
        src={require("../img/drawing.png")}
        alt="drawing"
        className="drawing"
      />
    </section>
  );
}

export default SectionAbout;
