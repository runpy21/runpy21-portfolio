import { useInView } from "react-intersection-observer";
import TechnologiesBar from "./TechnologiesBar";
import { techBarObj } from "../data/TechBarObj";

function SectionTechnologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const techData = techBarObj;

  return (
    <section
      ref={ref}
      className={`${"section-technologie"} ${inView ? "" : "section--hidden"}`}
      id="#technologies"
    >
      <div className="container technologie">
        <h2 className="section-technologie-title">Technologies</h2>
        <div className="section-technologie-bars item">
          {techData.map((el) => (
            <TechnologiesBar techObj={el} key={el.technology}></TechnologiesBar>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SectionTechnologies;
