import "./App.css";
import Page1 from "./components/Page1";

import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [data1, setData1] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">POP-UP DATA</h1>
      </header>
      {!toggle && (
        <Page1 setToggle={setToggle} data1={data1} setData1={setData1} />
      )}
    </div>
  );
}

export default App;
