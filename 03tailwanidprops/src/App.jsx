import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    name: "sumithra",
    age: 20,
    address: {
      city: "proddatur",
      state: "AP",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        vite with tailwind
      </h1>
      <Card username="hitesh" myArr={newArr} />
      <Card username="sumi" post="developer" />
      <Card />
    </>
  );
}

export default App;
