import styled from "styled-components";

const HeroStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 3rem;

  .hero-content {
    width: 100%;
    margin-top: 12%;

    p {
      width: 70%;
      padding-top: 1.5rem;
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      line-height: 33px;
      margin-left: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 850px) {
    .hero-content p {
      width: 90%;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    /* background: #006699;
    filter: blur(400px); */
    .hero-content p {
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
      padding-top: 0.8rem;
    }
  }
`;

export const AboutHeroStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 3rem;

  .hero-content {
    width: 100%;
    margin-top: 7.3%;

    .about-head {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 90px;
        height: 90px;
        margin-left: 2.8rem;
      }
    }

    p {
      width: 70%;
      padding-top: 0.7rem;
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      line-height: 33px;
      margin-left: auto;

      span {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.fonts.weights.f600};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 850px) {
    .hero-content p {
      width: 90%;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    /* background: #006699;
    filter: blur(400px); */
    .hero-content p {
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
      padding-top: 0.8rem;
    }
  }
`;

export default HeroStyled;
