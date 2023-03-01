import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import images from "../../assets";
import BackArrow from "../../assets/backArrow";
import Footer from "../../components/footer";
import NavBar from "../../components/nav";

const ZendPage: FunctionComponent = () => {
  const router = useNavigate();
  return (
    <>
      <ZendStyled>
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
      </ZendStyled>
      <Footer />
    </>
  );
};
export default ZendPage;

const ZendStyled = styled.div`
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
      width: 65%;
      margin: 2rem 0 4rem auto;
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      line-height: 33px;
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
`;
