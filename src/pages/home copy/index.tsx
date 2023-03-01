import { FunctionComponent } from "react";
import Hero from "../../parts/home/hero";
import ProjectsSection from "../../parts/home/projects";
import Banner from "../../components/banner";
import RecommendationSection from "../../parts/home/recommendation";
import Footer from "../../components/footer";

const Home: FunctionComponent = () => (
  <>
    <Hero />
    <Banner />
    <ProjectsSection />
    <RecommendationSection />
    <Footer />
  </>
);
export default Home;
