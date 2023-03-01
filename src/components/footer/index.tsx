import { FunctionComponent } from "react";
import styled from "styled-components";

const Footer: FunctionComponent = () => {
  const date = new Date().getFullYear();
  return (
    <FooterStyled>
      <div className="list-text">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/olatunji-monsurat-ojuolape-366b63169/"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/Monsurat01"
        >
          Dribble
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:ojuolatunji95@gmail.com"
        >
          Contact me - <span> ojuolatunji95@gmail.com</span>
        </a>
      </div>
      <div className="list-text">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/techbabby/"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@ojuolatunji95"
        >
          Medium
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCQLhOYnhI8Z5XFvFTvAwRLg"
        >
          Youtube
        </a>
      </div>
      <div className="list-text">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/techbabby"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pinterest.com/ojuolatunji/"
        >
          Pinterest
        </a>
      </div>

      <p>@{date} Olatunji Monsurat Ojuolape Portfolio</p>
      <p>
        My Timezone
        <span> GMT + 1</span>
      </p>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  width: 100%;
  padding: 1.5rem 3rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  .list-text {
    margin-bottom: 3rem;

    a {
      display: inline-block;
      margin-right: 3.5rem;
      min-width: 100px;
      font-size: ${({ theme }) => theme.fonts.sizes.px18};
      font-weight: ${({ theme }) => theme.fonts.weights.f600};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.px16};
    font-weight: ${({ theme }) => theme.fonts.weights.f600};
    margin-bottom: 1rem;
  }
`;
