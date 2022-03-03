import TodoDescription from "./TodoDescription";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const TodoList = (prop: { value: string }): JSX.Element => {
  const [submit, setSubmit] = useState<string[]>(() => {
    const d = new Date();
    const todoData = localStorage.getItem("submit");
    const newdate = d.toLocaleDateString();
    console.log(d);
    const setdate = localStorage.getItem("currdate");

    if (newdate !== setdate) {
      localStorage.removeItem("submit");
    }
    if (todoData) {
      return JSON.parse(todoData);
    } else {
      return [];
    }
  });
 
  useEffect(() => {
    if (prop.value === "") {
      return null;
    }
    setSubmit((submit) => {
      return [...submit, prop.value];
    });
  }, [prop.value]);

  useEffect(() => {
    localStorage.setItem("submit", JSON.stringify(submit));
  }, [submit]);

  return (
    <div className="card">
      {localStorage.getItem("submit") &&
        submit.map((item: string) => (
          <TodoDescription description={item} key={item} />
        ))}
    </div>
  );
};
export default TodoList;
