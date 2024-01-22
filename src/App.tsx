import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { marked } from "marked";
import Markdown from "marked-react";
import ReactMarkdown from "react-markdown";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";

function App() {
  const [input, setInput] = useState("");

  function updateInput(val: string): void {
    setInput(val);
  }

  return (
    <div className="App">
      <Editor input={input} updateInput={updateInput} />
      <Preview input={input} />
    </div>
  );
}

export default App;
