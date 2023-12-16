import React from "react";
import ReactDOM from "react-dom/client";
// Created an heading in React
// createElement(tag, attributes,  children)
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  [//   "Hello World"
  React.createElement(
    "p",
    {
      key: "heading-1",
      id: "heading-text",
    },
    "Hello World! I :3 react."
  ),
  React.createElement(
    "p",
    {
      key: "heading-2",
      id: "heading-text-2",
    },
    "Hello World Again"
  )]
);

console.log(heading); // create a JS OBJECT
// Created an Root Node in React
const root1 = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// Render heading in root 1.
root1.render(heading);
// Render heading in root 1.
root2.render(heading);
