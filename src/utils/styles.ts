import { css } from "styled-components";

interface Size {
  sm: number;
  md: number;
  lg: number;
}

const size: Size = {
  sm: 576,
  md: 992,
  lg: 1200,
};

const handleMediaQuery =
  (sizeKey: keyof Size, condition: "max-width" | "min-width") =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (${condition}: ${size[sizeKey] + "px"}) {
        ${css(...args)}
      }
    `;

/*
  Apply styled above a certain breakpoint
  Used like:
  ${below.md`
    ...styles
  `}
*/
export const below = {
  sm: handleMediaQuery("sm", "max-width"),
  md: handleMediaQuery("md", "max-width"),
  lg: handleMediaQuery("lg", "max-width"),
};

/*
  Apply styled above a certain breakpoint
  Used like:
  ${above.md`
    ...styles
  `}
*/
export const above = {
  sm: handleMediaQuery("sm", "min-width"),
  md: handleMediaQuery("md", "min-width"),
  lg: handleMediaQuery("lg", "min-width"),
};
