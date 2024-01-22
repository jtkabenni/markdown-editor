import React, { useState } from "react";
function Editor({ input, updateInput }) {
  const [wordCount, setWordCount] = useState(0);
  function countWords() {
    const trimmedText = input.trim();
    const words = trimmedText.split(/\s+/);
    setWordCount(words.length);
  }

  function downloadMarkdown() {
    const blob = new Blob([input], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown_file.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="inputArea">
      <div className="editorHeader">
        <h2>Editor</h2>
      </div>

      <hr></hr>
      <textarea
        placeholder="Type your markdown here..."
        className="textarea"
        onChange={(e) => {
          updateInput(e.target.value);
        }}
        onInput={countWords}
      ></textarea>
      <a className="download" onClick={downloadMarkdown}>
        Download file
      </a>
    </div>
  );
}

export default Editor;
