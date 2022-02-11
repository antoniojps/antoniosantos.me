import { below } from "~/lib";
import styled from "styled-components";

export const WrittenContent = styled.div`
  width: calc(100% - 119px);
  margin-left: auto;
  > * {
    max-width: 681px;
  }

  ${below.md`
    width: 100%;
    margin-right: auto;
    > * {
      max-width: 100%;
    }
  `}
`;
