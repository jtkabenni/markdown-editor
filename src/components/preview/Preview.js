import React, { useState, useEffect, useRef } from "react";
import countWordsAndCharacters from "../../helpers/getRenderedWordCount";
import ReactMarkdown from "react-markdown";
function Preview({ input }) {
  const { wordCount, characterCount } = countWordsAndCharacters("rendered");

  return (
    <div className="renderedArea">
      <div className="editorHeader">
        <h2>Rendered Markdown</h2>
        <div className="counts">
          <p>{characterCount} characters</p>
          <p>{wordCount} words</p>
        </div>
      </div>
      <hr></hr>
      <div id="rendered">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
