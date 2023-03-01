import { FunctionComponent } from "react";
import styled from "styled-components";
import NavBar from "../../components/nav";

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

const HeroStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 3rem;
  --heading-font: ${({ theme }) => theme.fonts.sizes.px80};

  .hero-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h1 {
      width: 50%;
    }

    p {
      width: 100%;
      padding-top: calc(var(--heading-font) * 3);
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      line-height: 33px;
    }
  }
`;
