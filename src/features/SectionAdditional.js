import { useInView } from "react-intersection-observer";

function SectionAdditional() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`${"section-additional"} ${inView ? "" : "section--hidden"}`}
    >
      <div className="container additional">
        <h2 className="additional-title">Additional technologies and skills</h2>
        <div className="additional-skills-container item fz-3-6 ">
          <ul className="additional-skills flex-start">
            <li>Git</li>
            <li>Quick learning</li>
            <li>Agile</li>
          </ul>
          <ul className="additional-skills flex-center">
            <li>Wordpress</li>
            <li>Engagement</li>
          </ul>
          <ul className="additional-skills flex-end">
            <li>Teamwork</li>
            <li>B2 english</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionAdditional;
