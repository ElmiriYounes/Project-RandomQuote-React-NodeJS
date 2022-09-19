import styled, { keyframes } from "styled-components";

type QuoteWrapperProps = {
  changeQuote: string;
};

export const QuoteWrapper = styled.div<QuoteWrapperProps>`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
  transition: all 0.5s;
  transform: rotateX(${(props) => props.changeQuote});

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 648px) {
    width: 90%;
    margin: 0 auto;
  }
`;

interface QuoteContentProps {
  loading: boolean;
}

export const QuoteContent = styled.div<QuoteContentProps>`
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.5s;
  background-color: rgb(22, 22, 22, 0.8);
  border-radius: 5px;
  padding: 50px 20px;
  color: rgb(96, 217, 250);
  box-shadow: ${(props) =>
    !props.loading && "0 0 80px -50px rgb(96, 217, 250)"};
  border: ${(props) => !props.loading && "1px solid rgb(96, 217, 250)"};
`;

const authorApears = keyframes`
  to {
    transform: rotate(30deg) translateY(0);
    opacity: .3;
  }
`;

export const BackgroundAuthor = styled.span`
  color: rgb(255, 255, 255, 0.3);
  margin-top: 50px;
  display: block;
  font-size: 5rem;
  transform: rotate(30deg) translateY(20px);
  opacity: 0;
  position: absolute;

  animation: ${authorApears} 1s 0.3s linear forwards;
`;

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon_loading {
    margin-bottom: 10px;
    font-size: 2.5rem;
    animation: ${loading} 2s linear infinite;
  }
`;

const appears = keyframes`
  to {
    opacity: 1;
  }
`;

export const QuoteText = styled.p`
  text-align: justify;
  transition: all 0.5s;
  line-height: 30px;
  opacity: 0;

  animation: ${appears} 1s 0.3s linear forwards;
`;

export const QuoteAuthor = styled.span`
  padding-top: 20px;
  display: block;
  float: right;
  transition: all 0.5s;
  opacity: 0;

  animation: ${appears} 1s 0.3s linear forwards;
`;

interface SpanProps {
  top: string;
  left: string;
  rotateX: string;
  rotateY: string;
  loading: boolean;
}

export const QuoteSpanPerspec = styled.span<SpanProps>`
  display: ${(props) => props.loading && "none"};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 20%;
  height: 20%;
  z-index: 1;

  &:hover ~ ${QuoteContent} {
    transform: rotateX(${(props) => props.rotateX})
      rotateY(${(props) => props.rotateY}) translateZ(-20px);
    box-shadow: 0 0 100px -50px rgb(96, 217, 250);
    border: 0px solid rgb(96, 217, 250);
  }

  &:hover ~ ${QuoteContent} > * {
    transform: translateZ(60px);
  }
`;
