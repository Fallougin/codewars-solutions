import React from "react"

export default function Solution(str) {

    let ReversedStrig = str.split('').reverse().join('')
    
    return (
        <div className="card">
              <p>&lt;8 kyu&gt; Reversed Strings </p>
              <a href="https://www.codewars.com/kata/5168bb5dfe9a00b126000018" target="_blank" rel="noreferrer">Problem</a>
              <span>
                <input value={ReversedStrig}></input>
                <button></button>
              </span>
              <p>Output: </p>
        </div>
    )
}