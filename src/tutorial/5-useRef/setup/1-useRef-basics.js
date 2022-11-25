import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const value = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value.current.value);
  };
  useEffect(() => {
    value.current.focus();
  });
  return (
    <>
      <form
        className='form'
        onSubmit={handleSubmit}>
        <input
          type='text'
          ref={value}
        />
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
