import styled from "styled-components";

const ProjectsSectionStyled = styled.div`
  padding: 1.5rem 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  .project-card {
    margin-bottom: 3.5rem;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      font-size: ${({ theme }) => theme.fonts.sizes.px20};
    }
  }

  .img-card {
    width: 100%;
    height: 550px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.border.radius.px50};

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;

    .project-card {
      margin-bottom: 2rem;
    }

    .title p {
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
    }

    .img-card {
      border-radius: ${({ theme }) => theme.border.radius.px20};
      height: 250px;
    }
  }
`;

export default ProjectsSectionStyled;
