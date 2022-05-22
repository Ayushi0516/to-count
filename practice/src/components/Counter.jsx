import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(3);
  const handleIncre = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncre(1)}>add</button>
      <button onClick={() => handleIncre(-1)}>delete</button>
    </>
  );
}
export { Counter };
