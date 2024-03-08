import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";

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
