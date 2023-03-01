import { FunctionComponent } from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Hero from "../../parts/works/hero";
import WorkList from "../../parts/works/workList";

const Works: FunctionComponent = () => (
  <>
    <Hero />
    <Banner />
    <WorkList />
    <Footer />
  </>
);
export default Works;
