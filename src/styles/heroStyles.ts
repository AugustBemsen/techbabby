import styled from "styled-components";

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

export default HeroStyled;
