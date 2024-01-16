import React, { useContext } from "react";
import MarkdownContext from "../../MarkdownContext";
import ReactMarkdown from "react-markdown";
function Preview({ input }) {
  // const { input } = useContext(MarkdownContext);
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
