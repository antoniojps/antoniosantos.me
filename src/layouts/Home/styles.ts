import { below } from "~/lib";
import styled from "styled-components";

export const Aside = styled.aside`
  max-width: 918px;
  height: 396px;
  margin: 60px 0;
  ${below.md`
    height: auto;
    margin: 30px 0;
  `}
`;
