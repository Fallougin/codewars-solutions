import React, { useState } from "react"
import question from '../img/question.png'
import CodePopup from "./CodePopup"

export default function SolutionEl(props) {
  const [isCodePopupVisible, setIsCodePopupVisible] = useState(false)
  const [outputText, setOutputText] = useState("")

  function handleButtonClick() {
    const inputElement = document.getElementById('myInput')
    const inputValue = inputElement.value
    
    if (props.customFunction) {
      const functionEl = props.customFunction(inputValue)
      setOutputText(`${functionEl}`)
    } else {
      setOutputText("(error)")
    }
  }

  function closeCodePopup() {
    setIsCodePopupVisible(false)
  }

  function toggleCodePopup() {
    setIsCodePopupVisible(!isCodePopupVisible)
  }

  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer" className="title--link">
        <p>{props.title} </p>
      </a>
      <div id="inputAndButton">
        <textarea id="myInput"></textarea>
        <button onClick={handleButtonClick}>▷</button>
      </div>
      <div className="outputAndSolution">
        <p id="outputString">Output: {outputText}</p>
        <img src={question} alt="question" onClick={toggleCodePopup} /> 
      </div>
      {isCodePopupVisible && <CodePopup onClose={closeCodePopup} code={props.code} />}
    </div>
  )
}