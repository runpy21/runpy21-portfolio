import { useState } from "react";
import { useInView } from "react-intersection-observer";

function SectionTimeLine() {
  const [activeYear, setActiveYear] = useState(2021);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const handleCircleClick = (year) => {
    if (window.innerWidth <= 768) {
      setActiveYear(year);
    }
  };
  return (
    <section
      ref={ref}
      className={`${"section-about-me"} ${inView ? "" : "section--hidden"}`}
      id="#about-me"
    >
      <div className="container about-me">
        <h2 className="about-me-title">About me</h2>
        <div className="about-me-timeline item">
          <div className="container-timeline">
            <div className="rectangle">&nbsp;</div>
            <div
              className={`circle circle1 ${
                activeYear === 2021 ? "circle-active" : ""
              }`}
              onClick={() => handleCircleClick(2021)}
            >
              &nbsp;
              <span className="year fz-3-6">2021</span>
            </div>

            <div
              className={`text-mobile ${activeYear === 2021 ? "active" : ""}`}
            >
              Completed my college education and smoothly moved into university
              life. Excited to delve into fresh academic challenges, expanding
              my knowledge in Computer Engineering
            </div>
            <div
              className={`circle circle2 ${
                activeYear === 2022 ? "circle-active" : ""
              }`}
              onClick={() => handleCircleClick(2022)}
            >
              <span className="year fz-3-6">2022</span>
            </div>

            <div
              className={`text-mobile ${activeYear === 2022 ? "active" : ""}`}
            >
              Successfully navigated university life, embracing a challenging
              academic curriculum in Computer Engineering. Explored topics such
              as digital systems, algorithms, and hardware design.
            </div>

            <div
              className={`circle circle3 ${
                activeYear === 2023 ? "circle-active" : ""
              }`}
              onClick={() => handleCircleClick(2023)}
            >
              <span className="year fz-3-6">2023</span>
            </div>

            <div
              className={`text-mobile ${activeYear === 2023 ? "active" : ""}`}
            >
              Started working as a full-stack developer at VALIWO. Created cool
              solutions and helped projects succeed by using my skills in
              software development.
            </div>

            <div
              className={`circle circle4 ${
                activeYear === 2024 ? "circle-active" : ""
              }`}
              onClick={() => handleCircleClick(2024)}
            >
              <span className="year fz-3-6">2024</span>
            </div>

            <div
              className={`text-mobile ${activeYear === 2024 ? "active" : ""}`}
            >
              Ready to join interesting projects and collaborate with motivated
              teams to make a meaningful difference.
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <p className="description">
          Completed my college education and smoothly moved into university
          life. Excited to delve into fresh academic challenges, expanding my
          knowledge in Computer Engineering
        </p>
        <p className="description">
          Successfully navigated university life, embracing a challenging
          academic curriculum in Computer Engineering. Explored topics such as
          digital systems, algorithms, and hardware design.
        </p>
        <p className="description">
          Started working as a full-stack developer at VALIWO. Created cool
          solutions and helped projects succeed by using my skills in software
          development.
        </p>
        <p className="description">
          Ready to join interesting projects and collaborate with motivated
          teams to make a meaningful difference.
        </p>
      </div>
    </section>
  );
}
export default SectionTimeLine;
