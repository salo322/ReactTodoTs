import { useContext, useState } from "react";
import { TodoContext } from "context";

const TodoInput = () => {
  const [value, setValue] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const { addTodo } = useContext(TodoContext);
  return (
    <>
      <input
        placeholder='Add todo'
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <button onClick={() => addTodo({ checked, value })}>Add todo</button>
    </>
  );
};

export default TodoInput;
