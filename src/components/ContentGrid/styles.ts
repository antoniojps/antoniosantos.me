import { below } from "~/lib";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  width: 100%;
  height: 100%;

  ${below.md`
    grid-template-rows: 1fr auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `}
`;

const commonStyles = css`
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}
`;

export const A = styled.div`
  position: relative;
  grid-column: 1 / 4;
  grid-row: 1;
  ${below.md`
    grid-column: 1 / 5;
    grid-row: auto / auto;
  `}
  background-color: rgba(0, 0, 0, 0.02);
  ${commonStyles};
`;

export const B = styled.div`
  position: relative;
  grid-column: 1 / 4;
  grid-row: 2;
  ${below.md`
    grid-column: 5 / 9;
    grid-row: auto / auto;
  `}
  background-color: rgba(0, 0, 0, 0.02);
  ${commonStyles};
`;

export const C = styled.div`
  position: relative;
  grid-column: 4 / 9;
  grid-row: 1 / span 2;
  background-color: rgba(0, 0, 0, 0.02);
  ${commonStyles};

  ${below.md`
    max-width: 562px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    grid-column: 1 / 9;
    grid-row: auto / auto;
    background-position: top;
  `}
`;
