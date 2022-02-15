import styled from "styled-components";

export const Start = styled.div`
  display: flex;
  align-items: center;
  text-decoration: underline;
`;

export const End = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accents-3);
  opacity: 0;
  transform: translateX(-10%);
  transition: all 150ms;
`;

export const ButtonListContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 10px;
  background-color: var(--background);
  font-size: var(--size-base);
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: var(--background-2);
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    background-color: var(--background-2);
  }
  &:active {
    background-color: var(--accents-2);
  }

  svg {
    height: 16px;
  }

  &:hover,
  &:focus {
    ${End} {
      opacity: 1;
      transform: translateX(0%);
      text-decoration: none;
    }
  }
`;

export const ButtonListContent = styled.span`
  padding: 0 var(--space-3);
`;
