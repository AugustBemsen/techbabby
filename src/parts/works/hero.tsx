import { FunctionComponent } from "react";
import styled from "styled-components";
import NavBar from "../../components/nav";
import HeroStyled from "../../styles/heroStyles";

const Hero: FunctionComponent = () => (
  <HeroStyled>
    <NavBar />
    <div className="hero-content">
      <h1>
        Work Experience <span>*</span>
      </h1>
      <p>
        For the last 3+ years of designing , i am fascinated by the tools in
        blockchain, finance, transportation and the business space. I have grown
        to feel more powerful in designing digital product. bringing to my eye
        strong design and great aesthetic. My current role is at Zend Wallet
        where i create a seamless trading platform for Cryptocurrencies traders.
      </p>
    </div>
  </HeroStyled>
);

export default Hero;
