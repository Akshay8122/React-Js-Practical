import TodoDescription from "./TodoDescription";
import "./App.css";
import { TodoContext } from "./Todo";
import { useContext } from "react";

const TodoList = () => {
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
