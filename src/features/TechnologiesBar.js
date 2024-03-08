import { useInView } from "react-intersection-observer";

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
export default TechnologiesBar;
