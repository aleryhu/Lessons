import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleaned Up");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("re-render");
  return (
    <>
      <h1>window</h1>
      
      <h2>{size} PX</h2>
    </>
  );
};
export default UseEffectCleanup;
