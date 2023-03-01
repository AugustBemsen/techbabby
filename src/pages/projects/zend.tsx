import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import images from "../../assets";
import BackArrow from "../../assets/backArrow";
import Footer from "../../components/footer";
import NavBar from "../../components/nav";
import ProjectSlugStyled from "../../styles/slugStyles";

const ZendPage: FunctionComponent = () => {
  const router = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <ProjectSlugStyled>
        <NavBar noNav />
        <div className="zend-content">
          <BackArrow className="back" onClick={() => router(-1)} />
          <div className="intro">
            <div className="title">
              <h1>Zend Wallet</h1>
              <p>Blockchain Case Study</p>
            </div>
            <p className="des">
              Zend Wallet is a web three solution that makes you manage your
              entire crypto assets and allows you to Send, receive & swap your
              cryptocurrencies with ease, with Zend wallet you can convert your
              prepaid gift cards to crypto instantly
            </p>
          </div>
          <div className="zend-banner">
            <img src={images.zendBanner} alt="Zend wallet" />
          </div>
        </div>
        <div className="zend-actions">
          <div>
            <h4>My Role</h4>
            <p>Product Designer</p>
          </div>
          <div>
            <h4>Team Members</h4>
            <p>12 team Members</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma | Figjam | Jira |Notion | Slack</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>5 Month</p>
          </div>
        </div>
        <div className="cta">
          <a
            href="https://www.notion.so/Zend-Wallet-0a3bf69bbe584a6293e3f2ac1d3d5c85?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Access to case study
          </a>
        </div>
      </ProjectSlugStyled>
      <Footer />
    </>
  );
};
export default ZendPage;
