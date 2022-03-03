import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import "./App.css";
import { useState, useEffect, useCallback } from "react";

const Todo = (): JSX.Element => {
  const [showLabel, setShowLabel] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);
  const [data, setData] = useState("");

  const submitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let date = new Date();
    let currdate = date.toLocaleDateString();
    localStorage.setItem("currdate", currdate);
  }, []);

  const clickHandler = () => {
    setShowLabel(!showLabel);
    setBtnVisible(!btnVisible);
  };

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const element = event.target as HTMLInputElement;
        setData(element.value);
      }
      if (event.key === "Escape") {
        setBtnVisible(btnVisible);
        setShowLabel(showLabel);
      }
    },
    [setData, setBtnVisible, setShowLabel]
  );

  useEffect(() => {
    if (setData) {
      window.addEventListener("keyup", handleKeyUp);
    } else {
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [setData, handleKeyUp, submitHandler]);

  return (
    <>
      <div className="container">
        <TodoDate />
        <div>
          <TodoList value={data} />
          {showLabel && (
            <form onSubmit={submitHandler}>
              <input
                className="Input-label"
                type="text"
                placeholder="Eneter something here"
                required
                min="1"
              />
            </form>
          )}
        </div>

        <div>
          {btnVisible && (
            <button className="Todo-btn" onClick={clickHandler}>
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Todo;
