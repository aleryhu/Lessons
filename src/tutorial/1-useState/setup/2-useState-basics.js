import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('jgdsldjf'));
  const [text, setText] = useState("random title");
  const handleclick = () => {
    text === "random title"
      ? setText("hello world")
      : setText("random title");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleclick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
