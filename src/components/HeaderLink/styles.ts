import styled from "styled-components";

export const Header = styled.h1`
  strong {
    padding: 0 var(--space-2);
    border-radius: var(--radius);
    background-color: var(--selection);
    font-weight: inherit;
    /* keep the highlight intact when a title wraps onto a second line */
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
`;
