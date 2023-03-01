import { FunctionComponent } from "react";
import Hero from "../../parts/about/hero";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import AboutBody from "../../parts/about/aboutBody";

const About: FunctionComponent = () => (
  <>
    <Hero />
    <Banner />
    <AboutBody />
    <Footer />
  </>
);
export default About;
