import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { marked } from "marked";
import Markdown from "marked-react";
import ReactMarkdown from "react-markdown";
function App() {
  const [input, setInput] = useState("");
  const [wordCount, setWordCount] = useState(0);

  function countWords() {
    const trimmedText = input.trim();
    const words = trimmedText.split(/\s+/);
    setWordCount(words.length);
  }
  return (
    <div className="App">
      <div className="inputArea">
        <div className="editorHeader">
          <h2>Editor</h2>
          <div className="counts">
            <p>{input.length} characters</p>
            <p>{wordCount} words</p>
          </div>
        </div>

        <hr></hr>
        <textarea
          className="textarea"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onInput={countWords}
        ></textarea>
      </div>
      <div className="renderedmarkdown">
        <h2>Rendered Markdown</h2>
        <hr></hr>
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
