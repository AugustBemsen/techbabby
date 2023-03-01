import { FunctionComponent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import images from "../../assets";

const NavBar: FunctionComponent = () => (
  <NavBarStyled>
    <div className="user">
      <img src={images.avatar1} alt="tech baby" />
      <h3>Olatunji Monsurat Ojuolape</h3>
    </div>
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
      <button type="button">
        <a href="mailto:ojuolatunji95@gmail.com">Contact Me</a>
      </button>
    </div>
  </NavBarStyled>
);

export default NavBar;

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user {
    display: flex;
    align-items: center;

    img {
      display: block;
      width: 60px;
      height: 60px;
      object-fit: cover;
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
  }
`;