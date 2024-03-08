import "./css/style.css";
import "./css/queries.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import SectionAbout from "./features/SectionAbout";
import SectionProjects from "./features/SectionProjects";
import SectionTechnologies from "./features/SectionTechnologies";
import SectionAboutMe from "./features/SectionTimeLine";
import SectionAdditional from "./features/SectionAdditional";

export default function App() {
  return (
    <>
      <Header />
      <SectionAbout />
      <SectionProjects />
      <SectionTechnologies />
      <SectionAdditional />
      <SectionAboutMe></SectionAboutMe>
      <Footer />
    </>
  );
}
