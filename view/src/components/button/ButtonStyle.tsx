import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const boundingStyles = css`
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  background-color: rgb(96, 217, 250);
  border-radius: 50%;
  z-index: 0;
`;

export const Bounding1 = styled(motion.div)`
  ${boundingStyles}
`;

export const Bounding2 = styled(motion.div)`
  ${boundingStyles}
`;

export const ButtonWrapper = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
`;

export const ButtonComponent = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(22, 22, 22);
  border: 2px solid rgb(96, 217, 250);
  cursor: pointer;
  display: block;
  color: rgb(96, 217, 250);
  position: relative;
  z-index: 1;

  &:active {
    transform: scale(0.92);
  }
`;
