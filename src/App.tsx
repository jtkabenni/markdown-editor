import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Editor input={input} updateInput={setInput} />
      <Preview input={input} />
    </div>
  );
}

export default App;
