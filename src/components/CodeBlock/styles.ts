import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const CopyButton = styled.button`
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: var(--radius);
  /* matches the night owl palette the code blocks are painted with */
  background-color: transparent;
  color: #d6deeb;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out, background-color 0.15s ease-in-out;

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
    background-color: rgba(214, 222, 235, 0.12);
  }
`;
