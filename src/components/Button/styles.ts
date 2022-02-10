import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  padding: 10px;
  background-color: var(--background);
  font-size: var(--size-xs);

  &:hover {
    background-color: var(--accents-1);
  }
  &:focus {
    outline: 0;
  }
  &:active {
    background-color: var(--accents-2);
  }
`;
