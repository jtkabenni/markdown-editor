import React from "react";
import ReactMarkdown from "react-markdown";
function Preview({ input }) {
  return (
    <div className="renderedArea">
      <div className="editorHeader">
        <h2>Rendered Markdown</h2>
      </div>
      <hr></hr>
      <div className="rendered">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
