import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit the google",
};
function MyApp() {
  return (
    <div>
      <h1>custom react app</h1>
    </div>
  );
}
const Anotherelement = (
  <a href="https://google.com" target="_blank">
    Google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
