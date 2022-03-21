import React from "react";
import { ButtonWrapper } from "./style";

const Button = ({ name, type, onClick, className, active }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick} className={className} active={active}>
      {name}
    </ButtonWrapper>
  );
};

export default Button;
