import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "aliyu",
    age: 18,
    position: "developer",
  });
  const { name, age, position } = person;
  const handleChange = () => {
    let newPosition = setPerson({ ...person, position: "intern" });
    return newPosition
  };
  return (
    <>
      <h2>{name}</h2>
      <h2>{position}</h2>
      <h2>{age}</h2>
      <button
        onClick={handleChange}
        className='btn'>
        change position
      </button>
    </>
  );
};

export default UseStateObject;
