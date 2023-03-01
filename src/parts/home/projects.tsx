import { FunctionComponent } from "react";
import styled from "styled-components";
import images from "../../assets";

const ProjectsSection: FunctionComponent = () => {
  const { cryptlyCard, zendCard, idrivaCard } = images;
  return (
    <ProjectsSectionStyled>
      <h2>
        Recent Projects
        <span>*</span>
      </h2>
      <div className="project-card">
        <div className="title">
          <p>Zend Wallet</p>
          <p>Cryptocurrency Wallet /Mobile App</p>
        </div>
        <div className="img-card">
          <img src={zendCard} alt="Zend Wallet" />
        </div>
      </div>
      <div className="project-card">
        <div className="title">
          <p>Cryptly .</p>
          <p>Cryptocurrency Loan/Webapp</p>
        </div>
        <div className="img-card">
          <img src={cryptlyCard} alt="Zend Wallet" />
        </div>
      </div>
      <div className="project-card">
        <div className="title">
          <p>Idriva</p>
          <p>Transportation /Mobile App</p>
        </div>
        <div className="img-card">
          <img src={idrivaCard} alt="Zend Wallet" />
        </div>
      </div>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSection;

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
`;
