import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Close from "../../assets/close";

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const NavBarSlide: FunctionComponent<Props> = ({ isVisible, setIsVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <NavBarSlideStyled
        initial={{ right: "-100vw" }}
        animate={{ right: 0 }}
        exit={{ right: "-100vw" }}
      >
        <Close className="close" onClick={() => setIsVisible(false)} />

        <NavLink
          onClick={() => setIsVisible(false)}
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsVisible(false)}
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setIsVisible(false)}
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => setIsVisible(false)}
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
          to="/works"
        >
          Work Experience
        </NavLink>
      </NavBarSlideStyled>
    )}
  </AnimatePresence>
);

export default NavBarSlide;

const NavBarSlideStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
  z-index: 20000;
  padding: 2rem 1.5rem;

  .close {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  .side-link {
    display: block;
    margin-bottom: 2.5rem;
    font-size: ${({ theme }) => theme.fonts.sizes.px24};
    font-weight: ${({ theme }) => theme.fonts.weights.f700};
    color: ${({ theme }) => theme.colors.black};

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
