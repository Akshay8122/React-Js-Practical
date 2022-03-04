import Todo_List from "./Todo_List";
import Todo_Date from "./Todo_Date";
import "./App.css";

const Todo = () => {
  return (
    <>
      <div className="container">
        <Todo_Date />
        <div>
          <Todo_List />
          <div>
            <button className="Todo-btn">+</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
