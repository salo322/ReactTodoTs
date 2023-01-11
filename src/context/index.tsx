import { createContext, useState, PropsWithChildren } from "react";

export interface TodoItem {
  checked: boolean;
  value: string;
}

interface TodoInterface {
  list: TodoItem[];
  addTodo: ({ checked, value }: TodoItem) => void;
  removeTodo: (array: []) => void;
}

const ContextDefaultValues: TodoInterface = {
  list: [],
  addTodo: ({ checked, value }: TodoItem) => {},
  removeTodo: (array: []) => {},
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
  const removeTodo = (array: []) => {
    setList(array);
  };

  return (
    <TodoContext.Provider value={{ list, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
