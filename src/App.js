import React from "react";
import ReactDOM from "react-dom";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

const App = () => {
  return (
    <div>
      <UseAnimations animation={github} size={56} />
      <br />
    </div>
  );
};

export default App;
