import styled, { css, keyframes } from "styled-components";

const boundingKeyframes = keyframes`
  0% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  100% {
    width: 140%;
    height: 140%;
    opacity: 0;
  }
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

  &::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    background-color: rgb(96, 217, 250);
    -webkit-animation: bounding 4s 0s ease-in-out infinite;
    animation: bounding 4s 0s ease-in-out infinite;
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    background-color: rgb(96, 217, 250);
    -webkit-animation: bounding 4s 2s ease-in-out infinite;
    animation: bounding 4s 2s ease-in-out infinite;
    border-radius: 50%;
    z-index: 0;
  }

  @-webkit-keyframes bounding {
    0% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  100% {
    width: 140%;
    height: 140%;
    opacity: 0;
  }
  }

  @keyframes bounding {
    0% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  100% {
    width: 140%;
    height: 140%;
    opacity: 0;
  }
  }
`;

export const ButtonComponent = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(22, 22, 22);
  border: 0px solid black;
  cursor: pointer;
  display: block;
  color: rgb(83, 10, 167);
  position: relative;
  z-index: 1;

  &:active {
    transform: scale(0.92);
  }
`;
