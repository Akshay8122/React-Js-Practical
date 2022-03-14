import { useContext } from "react";
import { TodoContext } from "./Todo";

interface TodoInf {
  id: number;
  data: string;
  check: boolean;
}
const TodoDescription = (prop: TodoInf) => {
  //use of usecontext hook
  const { submit, setSubmit } = useContext(TodoContext);

  const chekStatus = (id: number) => {
    const todolistitem = submit.map((item) => {
      if (item.id === id) {
        return { ...item, check: !item.check };
      }
      return item;
    });
    setSubmit(todolistitem);
  };

  return (
    <div className="Description">
      <p className={prop.check ? "change " : "not-change"}>{prop.data} </p>
      <i
        className={`fa fa-light fa-dot-circle font_style pt-1 ${
          prop.check ? "text-success" : "text-dark"
        }`}
        onClick={() => chekStatus(prop.id)}
      ></i>
    </div>
  );
};
export default TodoDescription;
