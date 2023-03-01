import { FunctionComponent } from "react";
import NavBar from "../../components/nav";
import HeroStyled from "../../styles/heroStyles";

const Hero: FunctionComponent = () => (
  <HeroStyled>
    <NavBar />
    <div className="hero-content">
      <h1>
        Welcome <span>*</span>
      </h1>
      <p>
        I’m Monsurat Olatunji, a Product Designer. I love creating seamless user
        experiences and digital user interfaces in blockchain, finance,
        transportation and health industry. I prioritize conversion-focused
        digital interfaces. I design with empathy to derive satisfaction in
        aligning both the business and user goals through research and design in
        Figma. Currently living in Lagos, Nigeria
      </p>
    </div>
  </HeroStyled>
);

export default Hero;
