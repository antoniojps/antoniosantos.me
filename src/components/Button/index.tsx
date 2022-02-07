import React from "react";
import { ButtonProps } from "./types";
import { ButtonContainer } from "./styles";

export const Button = ({ variant = "primary", children }: ButtonProps) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
