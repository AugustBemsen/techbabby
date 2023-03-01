import { FunctionComponent } from "react";
import Hero from "../../parts/projects/hero";
import ProjectsSection from "../../parts/projects/projects";
import Footer from "../../components/footer";
import Banner from "../../components/banner";

const Projects: FunctionComponent = () => (
  <>
    <Hero />
    <Banner />
    <ProjectsSection />
    <Footer />
  </>
);
export default Projects;
