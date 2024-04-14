import { useState } from "react";

import "./App.css";

function App() {
  //let counter = 15;

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
  };
  const removevalue = () => {
    //counter = counter - 1;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with sumithra</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removevalue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
