import React from "react";
import { Bounding1, Bounding2, ButtonComponent, ButtonWrapper } from "./ButtonStyle";

type ButtonProps = {
  text: string;
  handleClick?: () => void;
};

// Or
// interface ButtonProps {
//   text: string;
//   handleClick: () => void;
// }

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonWrapper>
      <Bounding1
        initial={{
          opacity: 1,
          width: "80%",
          height: "80%",
        }}
        animate={{
          opacity: 0,
          width: "130%",
          height: "130%",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <Bounding2
        initial={{
          opacity: 1,
          width: "80%",
          height: "80%",
        }}
        animate={{
          opacity: 0,
          width: "130%",
          height: "130%",
        }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
      />
      <ButtonComponent onClick={props.handleClick}>
        {props.text}
      </ButtonComponent>
    </ButtonWrapper>
  );
};

export default Button;
