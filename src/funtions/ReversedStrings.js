import React, { useState } from "react";
import question from '../img/question.png';
import CodePopup from "./CodePopup"; 

export default function Solution() {
  const [isCodePopupVisible, setIsCodePopupVisible] = useState(false);

  function closeCodePopup(){
    setIsCodePopupVisible(false);
  }

  function handleButtonClick(){
    const inputElement = document.getElementById('myInput')
    const inputValue = inputElement.value
    const reversedString = inputValue.split('').reverse().join('')
    document.getElementById('outputReversedString').textContent = `Output: ${reversedString}`;
  }

  function toggleCodePopup(){
    setIsCodePopupVisible(!isCodePopupVisible);
  }

  return (
    <div className="card">
      <a href="https://www.codewars.com/kata/5168bb5dfe9a00b126000018" target="_blank" rel="noreferrer" className="reversedStringText">
        <p>&lt;8 kyu&gt; Reversed Strings </p>
      </a>
      <div id="inputAndButton">
        <textarea id="myInput"></textarea>
        <button onClick={handleButtonClick}>▷</button>
      </div>
      <div className="outputAndSolution">
        <p id="outputReversedString">Output: </p>
        <img src={question} alt="question" onClick={toggleCodePopup} />
      </div>
      {isCodePopupVisible && <CodePopup onClose={closeCodePopup} />}
    </div>
  )
}