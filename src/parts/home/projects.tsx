import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../assets";
import ProjectsSectionStyled from "../../styles/projectStyles";

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
          <p>Idriva</p>
          <p>Transportation /Mobile App</p>
        </div>
        <Link to="/projects/idriva">
          <div className="img-card">
            <img src={idrivaCard} alt="Zend Wallet" />
          </div>
        </Link>
      </div>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSection;
