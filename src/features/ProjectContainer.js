import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";

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
        <h3 className="project-title fz-3-6">
          <span>{title}</span>
        </h3>
        <hr className="under-line" />
      </div>
      <div className="project-text-container">
        <p className="project-description">{text}</p>
      </div>
      <div className="project-btn">
        <Button className={"btn show"} link={link}>
          {btnTitle}
        </Button>
      </div>
    </div>
  );
}

export default ProjectContainer;
