import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  console.log(secondValue);
  return (
    <>
      {/* <h2>{firstValue}</h2> */}
      {/* <h2>Value : {secondValue}</h2> */}
      <h2>{text || "peter"}</h2>
      <button
        className='btn'
        onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? <p>There is an error</p> : <>
       <h2>There is no error.</h2>
      </>}
    </>
  );
};

export default ShortCircuit;
