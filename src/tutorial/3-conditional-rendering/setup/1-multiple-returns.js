import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    setIsloading(true);
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        console.log(user)
        const { login } = user;
        setUser(login);
        setIsloading(true)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    )
  }
  if (isError) {
    return (
      <>
      <h2>Error.....</h2>
      </>
    )
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
