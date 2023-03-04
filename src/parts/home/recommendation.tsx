import { FunctionComponent } from "react";
import styled from "styled-components";

const RecommendationSection: FunctionComponent = () => (
  <RecommendationSectionStyled>
    <h2>
      Recommendation
      <span>*</span>
    </h2>
    <div className="recommend">
      <p className="message">
        When our startup based in Canada needed to conduct research, on the
        perception of social media users about online information quality, we
        turned to Monsurat Olatunji. I had seen her impressive work online and
        read a brilliant article she had published (about user interface and
        experience) in the leading Nigerian business newspaper. The results of
        the research became central to our work and is highlighted in our book
        Misinformation Matters (published by Taylor & Francis, UK).
      </p>
      <p className="author">Uyi Omoreige</p>
      <p className="author">CEO, Avram Turing</p>
    </div>
    <div className="recommend">
      <p className="message">
        I had the pleasure of working with Ojuolape as a colleague on multiple
        projects and I highly recommend her as a UI/UX designer. Her attention
        to detail, design skills, and ability to translate complex requirements
        into elegant and intuitive user experiences is truly exceptional.Not
        only does she have a strong understanding of design principles and
        methodologies, but she also brings a collaborative approach to the
        design process, working closely with cross-functional teams to ensure
        the end result meets the needs of both the user and the
        business.Overall, I believe that Ojuolape would be a valuable asset to
        any design team, and I recommend her for any UI/UX design role.
      </p>
      <p className="author">Opeyemi Adeniran</p>
      <p className="author">Co - Founder Melior Music</p>
    </div>
  </RecommendationSectionStyled>
);

export default RecommendationSection;

const RecommendationSectionStyled = styled.div`
  padding: 1.5rem 3rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  .recommend {
    margin-bottom: 4rem;
    width: 85%;
    margin-left: auto;

    .message {
      font-size: ${({ theme }) => theme.fonts.sizes.px20};
      line-height: 32.74px;
      margin-bottom: 1rem;
    }

    .author {
      font-size: ${({ theme }) => theme.fonts.sizes.px20};
      font-weight: ${({ theme }) => theme.fonts.weights.f700};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (max-width: 850px) {
    .recommend {
      width: 95%;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;

    .recommend {
      margin-bottom: 2rem;
    }

    .message {
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
    }
  }
`;
