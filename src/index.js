import React from "react";
import ReactDOM from "react-dom";
import About from "./compos/About";
// import Course1 from "./compos/Course1";

import Navbar from "./compos/Navbar";
import Recognition from "./compos/Recognition";

function Main() {
  return (
    <>
      <Navbar />
      <About />
      <Recognition />
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
