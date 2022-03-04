import { useState } from "react";

interface TodoProps {
  description: string;
  check: boolean;
}

const TodoDescription = (props: TodoProps) => {
  const [listItem, setListItem] = useState(props.check);
  const Status = () => {
    setListItem((prevlistItem) => !prevlistItem);
  };
  return (
    <div className="Description">
      <p className={listItem ? 'change' : ''}>{props.description}{' '}</p>
      <i
        className={`fa fa-light fa-dot-circle font_style pt-1 ${
          listItem ? 'change_style' : 'text-dark'
        }`}
        onClick={Status}
      ></i>
    </div>
  );
};

export default TodoDescription;


