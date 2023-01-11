import { createContext, useState, PropsWithChildren } from "react";

interface TodoItem {
  checked: boolean;
  value: string;
}

interface TodoInterface {
  list: TodoItem[];
  addTodo: ({ checked, value }: TodoItem) => void;
  removeTodo: () => void;
}

const ContextDefaultValues: TodoInterface = {
  list: [],
  addTodo: ({ checked, value }: TodoItem) => {},
  removeTodo: () => {},
};

export const TodoContext = createContext<TodoInterface>(ContextDefaultValues);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [list, setList] = useState<TodoItem[]>([]);
  const addTodo = ({ checked, value }: TodoItem) => {
    setList((current) => [
      ...current,
      {
        checked,
        value,
      },
    ]);
  };
  const removeTodo = () => {};

  return (
    <TodoContext.Provider value={{ list, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
