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

export default HeroStyled;
