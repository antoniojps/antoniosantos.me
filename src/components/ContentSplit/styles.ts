import { below } from "~/lib";
import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: auto;
  margin: 60px 0;

  ${below.md`
    gap: 10px;
    margin: 30px 0;
  `}
`;

export const A = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`;

export const B = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`;
