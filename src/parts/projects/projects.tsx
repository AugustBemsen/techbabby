import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../assets";
import ProjectsSectionStyled from "../../styles/projectStyles";

const ProjectsSection: FunctionComponent = () => {
  const { cryptlyCard, zendCard, idrivaCard, transportCard, zendWebCard } =
    images;
  return (
    <ProjectsSectionStyled>
      <div className="project-card">
        <div className="title">
          <p>Zend Wallet</p>
          <p>Cryptocurrency Wallet /Mobile App</p>
        </div>
        <Link to="/projects/zend">
          <div className="img-card">
            <img src={zendCard} alt="Zend Wallet" />
          </div>
        </Link>
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
          <p>Zend Wallet</p>
          <p>Cryptocurrency Wallet/Webapp</p>
        </div>
        <div className="img-card">
          <img src={zendWebCard} alt="Zend Wallet" />
        </div>
      </div>
      <div className="project-card">
        <div className="title">
          <p>Idriva</p>
          <p>Transportation /Mobile App</p>
        </div>
        <Link to="/projects/idriva">
          <div className="img-card">
            <img src={idrivaCard} alt="i driva" />
          </div>
        </Link>
      </div>
      <div className="project-card">
        <div className="title">
          <p>Transport Service Limited Website Redesign</p>
          <p>Transportation /Website</p>
        </div>
        <div className="img-card">
          <img src={transportCard} alt="Transport" />
        </div>
      </div>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSection;
