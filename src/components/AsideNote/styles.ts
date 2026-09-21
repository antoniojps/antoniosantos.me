import styled from "styled-components";

export const AsideNote = styled.div`
  display: inline;
  padding: var(--space-2);
  border-radius: var(--radius);
  background-color: var(--background-2);
  font-size: var(--size-xs2);
  color: var(--accents-7);
`;

export const AsideCallout = styled.aside`
  display: block;
  margin: var(--space-7) 0;
  padding: var(--space-5) var(--space-6);
  border-left: 2px solid var(--accents-3);
  border-radius: 0 var(--radius) var(--radius) 0;
  background-color: var(--background-2);
  color: var(--accents-6);
  font-size: var(--size-s);

  > p {
    margin: 0;
  }

  > p + p {
    margin-top: var(--space-4);
  }

  > ul,
  > ol {
    margin-bottom: 0;
  }
`;
