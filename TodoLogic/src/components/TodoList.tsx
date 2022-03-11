import TodoDescription from "./TodoDescription";
import "./App.css";
import { TodoContext } from "./Todo";
import { useContext } from "react";

interface TodoListProp {
  id: number;
  data: string;
  check: boolean;
}

const TodoList = (prop: TodoListProp) => {
  const { submit } = useContext(TodoContext);

  return (
    <div className="card">
      {submit.map((item) => (
        <TodoDescription {...item} key={item.id} />
      ))}
    </div>
  );
};
export default TodoList;
