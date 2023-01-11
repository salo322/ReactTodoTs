import { useContext } from "react";
import { TodoContext } from "context";

const List = () => {
  const { list } = useContext(TodoContext);
  console.log(list);
  return <div>index</div>;
};

export default List;
