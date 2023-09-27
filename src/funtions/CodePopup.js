import React from "react"

export default function CodePopup({ onClose, code }) {
  function handleCloseClick(){
    onClose()
  }

  return (
    <div className="code-popup">
      <div className="code-content">
        <button className="close-button" onClick={handleCloseClick}>Close</button>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}