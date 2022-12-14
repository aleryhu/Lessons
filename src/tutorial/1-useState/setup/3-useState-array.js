import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className='item'>
            <h4>{name}</h4>
            <button onClick={()=> handleRemove(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        onClick={() => setPeople([])}>
        clear
      </button>
    </>
  );
};

export default UseStateArray;
