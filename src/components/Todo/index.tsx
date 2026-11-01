import React, { useEffect, useState } from "react";
import {
  TodoWrapper,
  TodoForm as TodoFormWrapper,
  TodoFilter as TodoFilterWrapper,
  TodoFilterButtons,
  TodoCount,
  TodoList as TodoListWrapper,
  TodoEmpty,
} from "./styles";
import {
  TodoFilter,
  TodoItemData,
  TodoFormProps,
  TodoListFilterProps,
  TodoListProps,
  TodoItemProps,
} from "./types";

const STORAGE_KEY = "todos";

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = text.trim();
    if (clean === "") return;
    onAdd(clean);
    setText("");
  };

  return (
    <TodoFormWrapper onSubmit={submit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="New item"
        autoFocus
      />
      <button type="submit">Add</button>
    </TodoFormWrapper>
  );
};

const TodoListFilter = ({ filter, onChange, counts, search, onSearch }: TodoListFilterProps) => (
  <TodoFilterWrapper>
    <TodoFilterButtons role="group" aria-label="Filter">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={filter === value}
          onClick={() => onChange(value)}
        >
          {label} <TodoCount>{counts[value]}</TodoCount>
        </button>
      ))}
    </TodoFilterButtons>
    <input
      type="search"
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search…"
      aria-label="Search"
    />
  </TodoFilterWrapper>
);

const TodoItem = ({ item, onToggle, onRemove }: TodoItemProps) => (
  <li data-done={item.done}>
    <label>
      <input type="checkbox" checked={item.done} onChange={onToggle} />
      <span>{item.text}</span>
    </label>
    <button type="button" onClick={onRemove} aria-label={`Remove ${item.text}`}>
      ×
    </button>
  </li>
);

const TodoList = ({ items, onToggle, onRemove }: TodoListProps) => {
  if (items.length === 0) return <TodoEmpty>Nothing here.</TodoEmpty>;

  return (
    <TodoListWrapper>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={() => onToggle(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}
    </TodoListWrapper>
  );
};

export const Todo = () => {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [search, setSearch] = useState("");

  // localStorage is only available in the browser, so hydrate after mount
  useEffect(() => {
    try {
      setTodos(JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]"));
    } catch {
      setTodos([]);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, loaded]);

  const add = (text: string) => setTodos([...todos, { id: Date.now(), text, done: false }]);

  const toggle = (id: number) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remove = (id: number) => setTodos(todos.filter((t) => t.id !== id));

  const visible = todos
    .filter((t) => (filter === "all" ? true : filter === "done" ? t.done : !t.done))
    .filter((t) => t.text.toLowerCase().includes(search.trim().toLowerCase()));

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.done).length,
    done: todos.filter((t) => t.done).length,
  };

  return (
    <TodoWrapper>
      <TodoForm onAdd={add} />
      <TodoListFilter
        filter={filter}
        onChange={setFilter}
        counts={counts}
        search={search}
        onSearch={setSearch}
      />
      <TodoList items={visible} onToggle={toggle} onRemove={remove} />
    </TodoWrapper>
  );
};

export default Todo;
