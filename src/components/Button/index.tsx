import React from "react";
import { ButtonProps } from "./types";
import { ButtonContainer } from "./styles";

export const Button = ({ variant = "primary", children, as = "button", ...rest }: ButtonProps) => {
  return (
    <ButtonContainer as={as} {...rest} tabIndex={0}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
