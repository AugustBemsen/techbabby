import { FunctionComponent } from "react";
import styled from "styled-components";
import images from "../../assets";
import ArrowLeft from "../../assets/arrow";
import OpenLink from "../../assets/link";

const AboutBody: FunctionComponent = () => {
  const { playlist, movies, reading } = images;
  return (
    <AboutBodyStyled>
      <div className="sect">
        <div className="tit">
          <p>My Skills</p>
          <ArrowLeft />
        </div>
        <p className="message">
          Affinity Mapping, Creating Design System, Stakeholder Interviews, Card
          Sorting Wireframes Market Research Persona Creation, User Experience
          Design, Competition Analysis User flow, User Research AB Testing,
          Developing Hypothesis
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Tools i Use</p>
          <ArrowLeft />
        </div>
        <p className="message">
          Figma, Figjam, Miro, Adobe XD, Adobe After Effects, Notion, Jira,
          Clickup, Confluence, Protopie
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Content Creator</p>
          <ArrowLeft />
        </div>
        <p className="message">
          I create content on my youtube channel where I share my learnings and
          experience being a designer and also so career advice that would help
          anyone advance in their various fields.
          <span>
            {" "}
            <a
              href="https://www.youtube.com/channel/UCQLhOYnhI8Z5XFvFTvAwRLg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube Channel
            </a>
            <OpenLink />
          </span>
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Design Educator</p>
          <ArrowLeft />
        </div>
        <p className="message">
          I write articles on UX proccess, case study, Blockchain etc. You can
          read them here.
          <span>
            {" "}
            <a
              href="https://medium.com/@ojuolatunji95"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <OpenLink />
          </span>
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Media</p>
          <ArrowLeft />
        </div>
        <p className="message">
          My article “ Creating convenient user experience for Lagos commuters:
          Designing the BRT App” was published on Business Day Newspapper
          <span>
            {" "}
            <a
              href="https://businessday.ng/amp/opinion/article/creating-convenient-user-experience-for-lagos-commuters-designing-the-brt-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read it Here
            </a>
            <OpenLink />
          </span>
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Design Mentor</p>
          <ArrowLeft />
        </div>
        <p className="message">
          I’m intentional about helping junior designer grow this year, so i
          selected few designer and started mentoring them
        </p>
      </div>
      <div className="sect">
        <div className="tit">
          <p>Music</p>
          <ArrowLeft />
        </div>
        <p className="message">
          I have an obsession with rap musics, you can almost always find me
          listening to rap musics on Apple Music, it boosts my productivity
          level.
        </p>
      </div>

      <div className="album">
        <div className="track">
          <h4>My Playlist</h4>
          <div className="track-img">
            <img src={playlist} alt="Playlist cover" />
          </div>
        </div>
        <div className="track">
          <h4>Favorite Movie</h4>
          <div className="track-img">
            <img src={movies} alt="Movie Cover" />
          </div>
        </div>
        <div className="track">
          <h4>Currently reading</h4>
          <div className="track-img">
            <img src={reading} alt="Reading" />
          </div>
        </div>
      </div>
    </AboutBodyStyled>
  );
};

export default AboutBody;

const AboutBodyStyled = styled.div`
  padding: 1.5rem 3rem;

  .sect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  .message {
    width: 50%;
    font-size: ${({ theme }) => theme.fonts.sizes.px16};
    line-height: 33px;

    span {
      display: inline-flex;
      align-items: center;
      padding-left: 10px;

      a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
      }

      svg {
        width: 18px;
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }

  .tit {
    display: flex;
    align-items: center;

    p {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fonts.sizes.px20};
      font-weight: ${({ theme }) => theme.fonts.weights.f600};
      margin-right: 1.2rem;
    }

    svg {
      width: 23px;
    }
  }

  .album {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    grid-auto-flow: dense;
    column-count: 2;
    padding-top: 1.5rem;
    padding-bottom: 3rem;

    @media screen and (max-width: 830px) {
      grid-template-columns: repeat(auto-fill, minmax(46%, 1fr));
    }
  }

  .track {
    width: 100%;

    h4 {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .track-img {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.border.radius.px20};

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;

    .sect {
      margin-bottom: 2rem;
      display: block;
    }

    .message {
      width: 100%;
    }

    .tit svg {
      display: none;
    }
  }
`;
