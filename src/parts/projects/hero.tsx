import { FunctionComponent } from "react";
import styled from "styled-components";
import NavBar from "../../components/nav";
import HeroStyled from "../../styles/heroStyles";

const Hero: FunctionComponent = () => (
  <HeroStyled>
    <NavBar />
    <div className="hero-content">
      <h1>
        Projects <span>*</span>
      </h1>
      <p>
        I love paying attention to little details when working a project, from
        user suggestions to tiny an arrow placement. These case studies contain
        real-world projects that demonstrate the design process, research, and
        development that went into creating these solutions. They include
        information on the project goals, research methods, design solutions,
        and the results of the project.
      </p>
    </div>
  </HeroStyled>
);

export default Hero;
