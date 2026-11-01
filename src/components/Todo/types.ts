export type TodoFilter = "all" | "active" | "done";

export interface TodoItemData {
  id: number;
  text: string;
  done: boolean;
}

export type TodoCounts = Record<TodoFilter, number>;

export interface TodoFormProps {
  onAdd: (text: string) => void;
}

export interface TodoListFilterProps {
  filter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
  counts: TodoCounts;
  search: string;
  onSearch: (search: string) => void;
}

export interface TodoListProps {
  items: TodoItemData[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export interface TodoItemProps {
  item: TodoItemData;
  onToggle: () => void;
  onRemove: () => void;
}
