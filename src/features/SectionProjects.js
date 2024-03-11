import ProjectContainer from "./ProjectContainer";
import { useInView } from "react-intersection-observer";

function SectionProjects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`${"section-projects"} ${inView ? "" : "section--hidden"}`}
      ref={ref}
      id="#projects"
    >
      <div className="projects">
        <ProjectContainer
          img={require("../img/1920x1080domkondyterska.png")}
          title={"Домашня кондитерська"}
          btnTitle={"Look it up"}
          link={"https://www.domkondyterska.com.ua/"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <ProjectContainer
          img={require("../img/bankist.png")}
          title={"bankist"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ProjectContainer
          img={require("../img/smartspace.webp")}
          title={"Smartspace"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ProjectContainer
          img={require("../img/mapty.webp")}
          title={"mapty"}
          btnTitle={"Soon"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
      </div>
    </section>
  );
}

export default SectionProjects;
