import "./App.css";

const TodoDate = () => {
  const d = new Date();
  const date: number = d.getDate();
  const year: number = d.getFullYear();
  const month: string = d.toLocaleDateString("default", { month: "short" });
  const week: string = d.toLocaleDateString("default", { weekday: "long" });

  return (
    <>
      <div>
        <div className="Calendar-items">
          <h1 className="Date-value">{date}</h1>
          <span>
            <p className="Month-value">
              {month}
              <br />
              {year}
            </p>
          </span>
        </div>
        <span>
          <p className="Week-value">{week}</p>
        </span>
      </div>
    </>
  );
};

export default TodoDate;
