import { below } from "@/utils";
import styled from "styled-components";
import { background, BackgroundProps, padding, PaddingProps } from "styled-system";

export const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 90px);
  gap: 30px;
  margin: 60px 0;

  ${below.md`
    gap: 10px;
    margin: 30px 0;
  `}

  ${below.sm`
    height: 300px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  `}
`;

export const Start = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;

  ${below.sm`
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  `}
`;

export const End = styled.div`
  grid-row: 1 / 3;
  grid-column: 7 / 9;
  ${below.sm`
    grid-row: 3 / 5;
    grid-column: 3 / 5;
  `}
`;

interface BoxProps extends PaddingProps, BackgroundProps {}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  svg {
    height: 100%;
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.05);
    }
  }

  ${background};
  ${padding};
`;
