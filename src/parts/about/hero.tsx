import { FunctionComponent } from "react";
import images from "../../assets";
import NavBar from "../../components/nav";
import { AboutHeroStyled } from "../../styles/heroStyles";

const Hero: FunctionComponent = () => (
  <AboutHeroStyled>
    <NavBar />
    <div className="hero-content">
      <div className="about-head">
        <h1>
          About Me <span>*</span>
        </h1>
        <img src={images.roseAvatar} alt="Tech Baby" />
      </div>

      <p>
        Currently looking for a new as a senior/Mid Level Product Designer. Open
        to fulltime, Contract or freelance roles.
      </p>
      <p>
        My Name is Olatunji Monsurat Ojuolape, also known as{" "}
        <span> Techbabby </span>, Living in Lagos Nigeria and i am open to work
        in anywhere in the world 🌍
      </p>
      <p>
        I&apos;m a seasoned end - to- end product designer and a Web
        3enthusiast, I love creating seamless user experiences and digital user
        interfaces, have worked on various projects in various industries like
        Logistics, E-commerce, Health, and many more. As a creative, I&apos;m
        heavily invested in designing products for brands to better tell their
        story, improve their user experience, and prioritize conversion-focused
        digital interfaces.
      </p>
    </div>
  </AboutHeroStyled>
);

export default Hero;
