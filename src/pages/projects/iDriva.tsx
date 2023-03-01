import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets";
import BackArrow from "../../assets/backArrow";
import Footer from "../../components/footer";
import NavBar from "../../components/nav";
import ProjectSlugStyled from "../../styles/slugStyles";

const IDrivaPage: FunctionComponent = () => {
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
              <h1>IDriva</h1>
              <p>Transportation Case Study</p>
            </div>
            <p className="des">
              iDriva is a community for professional drivers to network, learn
              and earn. It is a solution built to enhance productivity, lower
              risks, and help drivers get their job done effectively.
            </p>
          </div>
        </div>

        <div className="about-com">
          <h4>Industry Background</h4>
          <p>
            Drivers are a huge part of the daily operations of a transport
            company, they are the face of the business because they have direct
            access to the customers. Therefore organizations need to ensure that
            customers are satisfied with the services rendered, and drivers need
            to be empowered with the right tools that would enable them to do
            their jobs effectively.
          </p>
        </div>

        <div className="com-flex">
          <div className="img-side">
            <img src={images.lady} alt="woman" />
          </div>
          <div className="text-side">
            <div className="top">
              <h3>My Role</h3>
              <p>Product (UI/UX) Designer</p>
            </div>
            <div className="just-text">
              <p>
                As UX Designer on the team working with the developers. I played
                a crucial role of interviewing stakeholders, Drivers and
                providing solutions for the challenges outlined in the problem
                statement. Specifically, I was responsible for the following:
              </p>
              <ol>
                <li>
                  Designing user-friendly interfaces using tools like
                  Confluence, Miro, Jira, Figma, Canva e.t.c.
                </li>
                <li>
                  Collaborating with the compliance team to understand relevant
                  regulations so as to design the platform to comply with these
                  laws, reducing the risk of legal penalties.
                </li>
                <li>Creating a design system open for scalability.</li>
                <li>
                  Calculating success metrics to measure, growth of product.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="zend-actions">
          <div>
            <h4>My Role</h4>
            <p>Product Designer</p>
          </div>
          <div>
            <h4>Team Members</h4>
            <p>6 team Members</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma | Miro | Jira | Confluennce | Teams</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>7 Month</p>
          </div>
        </div>
        <div className="cta">
          <a
            href="https://www.notion.so/IDRIVA-is-a-solution-built-to-enhance-productivity-lower-risks-and-help-drivers-get-their-job-done-516ff07461334cd9b7420e0b9994fa35?pvs=4"
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
export default IDrivaPage;
