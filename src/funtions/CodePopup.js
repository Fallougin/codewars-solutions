import React from "react";

export default function CodePopup({ onClose }) {
  function handleCloseClick(){
    onClose()
  }

  return (
    <div className="code-popup">
      <div className="code-content">
        <button className="close-button" onClick={handleCloseClick}>Close</button>
        <pre>
          <code>
            {`function solution(str) {
  return str.split('').reverse().join('');
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}