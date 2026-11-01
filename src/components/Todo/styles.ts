import styled from "styled-components";

export const TodoWrapper = styled.section`
  max-width: 32rem;

  input[type="text"],
  input[type="search"] {
    padding: 0.6rem 0.8rem;
    border: 1.5px solid var(--accents-2);
    border-radius: var(--radius);
    background: var(--background);
    min-width: 0;
  }

  input:focus {
    outline: 2px solid var(--base);
    outline-offset: 1px;
  }

  button {
    font-weight: var(--weight-bold);
    padding: 0.6rem 0.9rem;
    border: 1.5px solid var(--base);
    border-radius: var(--radius);
    background: var(--background);
    color: var(--base);
    cursor: pointer;
  }
`;

export const TodoForm = styled.form`
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-5);

  input {
    flex: 1;
  }

  button {
    background: var(--base);
    color: var(--base-inverse);
  }
`;

export const TodoFilter = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  flex-wrap: wrap;

  input {
    flex: 1;
  }
`;

export const TodoFilterButtons = styled.div`
  display: flex;
  gap: var(--space-1);

  button {
    border-color: var(--accents-2);
    font-weight: var(--weight-normal);
  }

  button[aria-pressed="true"] {
    border-color: var(--base);
    background: var(--background-2);
    font-weight: var(--weight-bold);
  }
`;

export const TodoCount = styled.span`
  color: var(--accents-4);
  font-size: 0.85em;
`;

export const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1.5px solid var(--accents-2);
  border-radius: var(--radius);

  li {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin: 0;
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid var(--accents-2);
    font-size: var(--size-base);
  }

  li:before {
    content: none;
  }

  li:last-child {
    border-bottom: 0;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 1.1rem;
    height: 1.1rem;
    accent-color: var(--base);
  }

  li[data-done="true"] span {
    color: var(--accents-4);
    text-decoration: line-through;
  }

  li button {
    border: 0;
    color: var(--accents-4);
    padding: 0.2rem 0.5rem;
  }

  li button:hover {
    color: var(--base);
  }
`;

export const TodoEmpty = styled.p`
  color: var(--accents-4);
  padding: var(--space-5) 0;
`;
