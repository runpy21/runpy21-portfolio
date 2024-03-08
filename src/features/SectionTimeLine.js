import { useInView } from "react-intersection-observer";

function SectionTimeLine() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`${"section-about-me"} ${inView ? "" : "section--hidden"}`}
      id="#about-me"
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
export default SectionTimeLine;
