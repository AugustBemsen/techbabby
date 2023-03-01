import { FC } from "react";
import styled from "styled-components";
import { Variants, motion } from "framer-motion";
import skills from "../../utils/skills";

const Banner: FC = () => {
  const marqueeVariants: Variants = {
    animate: {
      x: -window.innerWidth + 50,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };
  return (
    <BannerStyled>
      <motion.p variants={marqueeVariants} animate="animate">
        {skills.map((skill: string) => (
          <span>{skill}</span>
        ))}
      </motion.p>
    </BannerStyled>
  );
};

export default Banner;

const BannerStyled = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding-bottom: 3rem;

  p {
    width: 100%;
    margin: 0;
    font-size: ${({ theme }) => theme.fonts.sizes.px22};
    font-weight: ${({ theme }) => theme.fonts.weights.f700};
    white-space: nowrap;

    span {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 6rem;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background: ${({ theme }) => theme.colors.primary};
        left: -20px;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
