import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: var(--radius);
  padding: 10px;
  background-color: var(--background);
  font-size: var(--size-xs);

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
`;
