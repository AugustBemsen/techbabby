import styled from "styled-components";

const ProjectSlugStyled = styled.div`
  padding: 1.5rem 3rem;

  .zend-content {
    padding-top: 3rem;
  }

  .back {
    width: 30px;
    cursor: pointer;
  }

  .intro {
    margin: 2rem 0;

    .title {
      p {
        font-size: ${({ theme }) => theme.fonts.sizes.px20};
      }
    }

    .des {
      width: 60%;
      margin: 2rem 0 4rem auto;
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      line-height: 33px;
      padding-right: 4rem;
    }
  }

  .zend-banner {
    width: 100%;
    height: 600px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .zend-actions {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    grid-auto-flow: dense;
    column-count: 2;
    padding: 3rem 0;
    width: 90%;
    margin: auto;

    @media screen and (max-width: 830px) {
      grid-template-columns: repeat(auto-fill, minmax(46%, 1fr));
    }

    div {
      width: 100%;

      h4 {
        font-size: ${({ theme }) => theme.fonts.sizes.px22};
      }

      p {
        width: 70%;
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fonts.sizes.px18};
      }
    }
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .about-com {
    width: 100%;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.green};
    margin-bottom: 6rem;

    h4 {
      font-size: ${({ theme }) => theme.fonts.sizes.px22};
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.fonts.weights.f700};
    }

    p {
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
      color: ${({ theme }) => theme.colors.white};
      margin: 1.5rem 0;
      width: 95%;
      line-height: 34px;
    }
  }

  .com-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    .img-side {
      width: 40%;
      height: 500px;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text-side {
      width: 55%;

      .top {
        margin-bottom: 2rem;

        h3 {
          font-size: ${({ theme }) => theme.fonts.sizes.px25};
        }

        p {
          font-size: ${({ theme }) => theme.fonts.sizes.px16};
        }
      }

      .just-text {
        p,
        li {
          font-size: ${({ theme }) => theme.fonts.sizes.px16};
          line-height: 170.4%;
        }

        p {
          margin-bottom: 1.5rem;
        }

        li {
          margin-bottom: 1rem;
        }

        ol {
          margin-left: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    .intro .des {
      width: 75%;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;

    .zend-content {
      padding-top: 1.5rem;
    }

    .intro .des {
      width: 90%;
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
      padding-top: 0;
    }

    .zend-banner {
      height: 300px;
    }

    .zend-actions {
      padding: 0;
      margin: 0;
      margin-top: 2rem;
      grid-row-gap: 2rem;
    }

    .about-com {
      padding: 1.5rem;
      margin-bottom: 3rem;

      p {
        width: 100%;
      }
    }

    .com-flex {
      display: block;

      .img-side {
        width: 100%;
        height: 400px;
      }

      .text-side {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
`;

export default ProjectSlugStyled;
