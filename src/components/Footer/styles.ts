import { below } from "@/utils";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  ${below.md`
    flex-direction: column;
    justify-content: start;
    margin-bottom: var(--space-6);
  `}
`;

export const FooterStart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterEnd = styled.div`
  display: flex;
  align-items: end;
`;

export const FooterEndInner = styled.div`
  display: flex;
  align-items: center;
`;

export const Message = styled.p`
  color: var(--accents-3);
  font-size: var(--size-xs);
`;
