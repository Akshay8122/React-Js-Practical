import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import "./App.css";
import { useState, useEffect, createContext } from "react";
interface TodoListProp {
  id: number;
  data: string;
  check: boolean;
}
type contexttype = {
  submit: TodoListProp[];
  setSubmit: React.Dispatch<React.SetStateAction<TodoListProp[]>>;
};
//creating Context
export const TodoContext = createContext({} as contexttype);

const getLocalItems = () => {
  let storageList = localStorage.getItem("submit");

  if (storageList) {
    return JSON.parse(localStorage.getItem("submit"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [showLabel, setShowLabel] = useState(false);
  const [submit, setSubmit] = useState<TodoListProp[]>(getLocalItems);
  const [input, setInput] = useState("");

  //submitHandler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let date = new Date();
    let currdate = date.toLocaleDateString();
    localStorage.setItem("currdate", currdate);
    setShowLabel(true);
    JSON.parse(localStorage.getItem("submit"));

    const submitdata = [
      {
        id: Math.random() * 10000,
        data: input,
        check: false,
      },
    ];
    setSubmit([...submit, ...submitdata]);
    setInput("");
  };

  //changeHandler
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const elementValue = e.target as HTMLInputElement;
    setInput(elementValue.value);
  };
  const clickHandler = () => {
    setShowLabel(true);
  };

  useEffect(() => {
    const d = new Date();
    const todoData = localStorage.getItem("submit");
    const newdate = d.toLocaleDateString();
    const setdate = localStorage.getItem("currdate");

    if (newdate !== setdate) {
      localStorage.removeItem("submit");
    }
    if (todoData) {
      return JSON.parse(todoData);
    } else {
      return [];
    }
  }, [setSubmit]);

  //Esc Key Logic
  useEffect(() => {
    const handleEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowLabel(false);
      }
    };
    document.addEventListener("keydown", handleEvent);
    return () => {
      document.removeEventListener("keydown", handleEvent);
    };
  }, [setShowLabel]);

  useEffect(() => {
    localStorage.setItem("submit", JSON.stringify(submit));
  }, [submit]);

  return (
    <>
      <TodoContext.Provider value={{ submit, setSubmit }}>
        <div className="container">
          <TodoDate />
          <div>
            <TodoList {...submit[0]} />
            {showLabel && (
              <form onSubmit={submitHandler}>
                <input
                  className="Input-label"
                  type="text"
                  placeholder="Eneter something here"
                  required
                  autoFocus
                  value={input}
                  onChange={changeHandler}
                  min="1"
                />
              </form>
            )}
          </div>

          <div>
            {!showLabel && (
              <button className="Todo-btn" onClick={clickHandler}>
                +
              </button>
            )}
          </div>
        </div>
      </TodoContext.Provider>
    </>
  );
};
export default Todo;
