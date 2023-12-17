import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h2", {
//   id: 'heading-text'
// }, "Hello Everyone");

// JSX (babel transpiles to React.creatElement  before it reaches js engine)
const Title = () => (
  <h1 id="heading-txt" className="head">
    Hello Everyone!
  </h1>
);

const heading = (
  <h1 id="heading" className="head">
    Hello Everyone!
  </h1>
);

const HeadingComponent = () => (
  <div>
    {heading}
    <Title />
    <h1 id="heading-text" className="head">
      I am a functional Component
    </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
