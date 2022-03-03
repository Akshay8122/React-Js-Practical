import React from 'react';
import {useState} from 'react';
import Product from './Product';
import './style.css';

interface target {
  heading : string,
  text:string,
}

const App = (props:target) => {
  const [text, setText] = useState(null);

  const clickHandler = () => {
    setText('Welcome to React Journy');
    console.log(setText);
  };
  return (
    <div>
      <h1 className="blur">
        {props.heading} {text}
      </h1>
      <button className="unique" onClick={clickHandler}>
        click here
      </button>
      <Product/>
    </div>
  );
};

export default App;
 
