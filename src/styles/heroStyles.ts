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
`;

export default HeroStyled;
