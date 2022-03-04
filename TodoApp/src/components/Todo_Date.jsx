import React from 'react';
import './App.css';

const Todo_Date = () => {
  const d = new Date();
  const date = d.getDate();
  const year = d.getFullYear();
  const month = d.toLocaleDateString("default", { month: "short" });
  const week = d.toLocaleDateString("default", { weekday: "long" });

  return (
    <>
      <div >
        <div className="Calendar-items">
          <h1 className="Date-value">{date}</h1>
          <span>
            <p className="Month-value">
              {month}
              <br/>
              {year}
            </p>
          </span>
        </div>
        <span><p className="Week-value">{week}</p></span>
      </div>
    </>
  );
};

export default Todo_Date;
