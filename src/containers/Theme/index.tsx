import React from "react";
import { CssVariables, GlobalStyle, PrismTheme } from "./styles.globals";

export const Theme = () => {
  return (
    <>
      <CssVariables />
      <GlobalStyle />
      <PrismTheme />
    </>
  );
};

export default Theme;
