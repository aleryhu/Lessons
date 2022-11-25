import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`useEffect Called ${value} times`);
    if (value >= 1) {
      document.title = `changed value to  ${value}`;
    }
  }, [value]);
  useEffect(() => {
    console.log("Hello world");
  }, []);
  console.log("re-rendering");
  return (
    <>
      <h2>{value}</h2>
      <button
        className='btn'
        onClick={() => setValue(value + 1)}>
        click here
      </button>
    </>
  );
};

export default UseEffectBasics;
