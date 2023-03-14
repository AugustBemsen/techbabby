import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import images from "../../assets";
import NavBarSlide from "./slide";
import Toggle from "../../assets/toggle";

interface Props {
  noNav?: boolean;
}

const NavBar: FunctionComponent<Props> = ({ noNav }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <NavBarStyled>
      <Link to="/">
        <div className="user">
          <div className="img">
            <img src={images.avatar1} alt="tech baby" />
          </div>
          <h3>Olatunji Monsurat Ojuolape</h3>
        </div>
      </Link>
      {!noNav && (
        <>
          <div className="nav-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/works"
            >
              Work Experience
            </NavLink>
          </div>
          <button type="button">
            <a href="mailto:ojuolatunji95@gmail.com">Contact Me</a>
          </button>
        </>
      )}
      <Toggle onClick={() => setIsVisible(true)} className="toggle" />
      <NavBarSlide isVisible={isVisible} setIsVisible={setIsVisible} />
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user {
    display: flex;
    align-items: center;

    .img {
      width: 40px;
      height: 40px;
      object-fit: fill;
      border-radius: 100%;
      overflow: hidden;

      img {
        display: block;
        /* height: 100%; */
        width: 100%;
      }
    }

    h3 {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fonts.sizes.px24};
      margin-left: 0.7rem;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;

    .nav-link {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fonts.sizes.px16};
      font-weight: ${({ theme }) => theme.fonts.weights.f600};
      margin-right: 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      }

      &.active {
        font-weight: ${({ theme }) => theme.fonts.weights.f700};
        color: ${({ theme }) => theme.colors.primary};

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
        }
      }
    }
  }

  button {
    background: none;
    border: ${({ theme }) => theme.border.width.light} solid
      ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.radius.px50};
    width: 120px;
    height: 35px;
    font-weight: ${({ theme }) => theme.fonts.weights.f600};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    overflow: hidden;

    &::before {
      transition: all 0.4s;
      background: ${({ theme }) => theme.colors.primary};
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 0%;
      height: 100%;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .toggle {
    display: none;
  }

  @media screen and (max-width: 850px) {
    /* background: ${({ theme }) => theme.colors.white}; */

    .nav-links,
    button {
      display: none;
    }
    .toggle {
      display: block;
    }
  }

  @media screen and (max-width: 500px) {
    .user {
      img {
        width: 45px;
        height: 45px;
      }

      h3 {
        font-size: ${({ theme }) => theme.fonts.sizes.px18};
        margin-left: 0.5rem;
      }
    }
  }
`;
