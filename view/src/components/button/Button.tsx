import React from "react";
import { ButtonComponent, ButtonWrapper } from "./ButtonStyle";

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
      <ButtonComponent onClick={props.handleClick}>
        {props.text}
      </ButtonComponent>
    </ButtonWrapper>
  );
};

export default Button;
