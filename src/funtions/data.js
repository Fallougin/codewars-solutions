export default [
    {
        id: 1,
        title: "<8 kyu> Reversed Strings",
        customFunction: (inputValue) => {
            const functionEl = inputValue.split('').reverse().join('')
            return functionEl
        },
        code: "function solution(str) {\n  return str.split('').reverse().join('')\n}",
        link: "https://www.codewars.com/kata/5168bb5dfe9a00b126000018"
    },
    {
        id: 2,
        title: "<8 kyu> Return Negative",
        customFunction: (inputValue) => {
            const numInputValue = Number(inputValue)
            if (!isNaN(numInputValue)) {
                const functionEl = numInputValue <= 0 ? numInputValue : -numInputValue
                return functionEl.toString()
              } else {
                return "Invalid Input"
            }
        },
        code: "function makeNegative(num) {\n  if (num <= 0){\n    return num\n  }\n  else {\n    return num*(-1)\n  }\n}",
        link: "https://www.codewars.com/kata/55685cd7ad70877c23000102"
    },
    {
        id: 3,
        title: "<8 kyu> Find Maximum and Minimum Values of a List",
        customFunction: (inputValue) => {
            let list
            try {
                list = JSON.parse(inputValue)
            } catch (anotherSolution) {
                list = inputValue.split(',').map(Number)
            }

            if (!Array.isArray(list) || list.some(isNaN)) {
                return "Invalid Value"
            }
            
            const min = Math.min(...list)
            const max = Math.max(...list)
            return `Min: ${min}, Max: ${max}`
        },
        code: "var min = function(list){ return Math.min(...list) }\nvar max = function(list){ return Math.max(...list) }",
        link: "https://www.codewars.com/kata/577a98a6ae28071780000989"
    },
    {
        id: 4,
        title: "<8 kyu> Calculate average",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }

            if (!Array.isArray(array) || array.some(isNaN)) {
                return "Invalid Value"
            }

            let sum = 0
            for (let i = 0; i < array.length; i++) {
                sum += array[i]
            }
            return sum / array.length
        },
        code: "function findAverage(array) {\n  let sum = 0\n  if (array.length === 0) {\n    return 0\n  }\n  else {\n    for (let i = 0 i < array.length i++) {\n      sum += array[i]\n    }\n    return sum / array.length\n  }\n}",
        link: "https://www.codewars.com/kata/57a2013acf1fa5bfc4000921"
    },
    {
        id: 5,
        title: "<8 kyu> Calculate BMI",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }
            if (!Array.isArray(array) || array.length !== 2 || array.some(isNaN)) {
                return "Invalid Input"
            }
            const [weight, height] = array

            const calculateBMI = (weight, height) => {
                const result = (weight/Math.pow(height, 2))
                if (result <= 18.5) {
                    console.log(result)
                    return "Underweight"
                } else if (result <= 25.0) {
                    return "Normal"
                } else if (result <= 30) {
                    return "Overweight"
                } else {
                    return "Obese"
                }
            }

            return calculateBMI(weight, height)
        },
        code: "function bmi(weight, height) {\n  let result = weight / Math.pow(height, 2)\n  if (result <= 18.5){\n    return \"Underweight\"\n  }\n  else if (result <= 25.0){\n    return \"Normal\"\n  }\n  else if (result <= 30){\n    return \"Overweight\"\n  }\n  else if (result > 30){\n    return \"Obese\"\n  }\n}",
        link: "https://www.codewars.com/kata/57a429e253ba3381850000fb"
    },
    {
        id: 6,
        title: "<8 kyu> Square(n) Sum",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }

            let sum = 0
            for (let i = 0; i < array.length; i++) {
                sum += Math.pow(array[i], 2)
            }
            return sum
        },
        code: "function squareSum(numbers){\n  let sum = 0\n  for (let i = 0 i < numbers.length i++){\n    sum += Math.pow(numbers[i], 2)\n  }\n  return sum\n}",
        link: "https://www.codewars.com/kata/515e271a311df0350d00000f"
    },
    {
        id: 7,
        title: "<8 kyu> Even or Odd",
        customFunction: (inputValue) => {
            const number = Number(inputValue)
            if (isNaN(number)) {
                return "Invalid Input"
            }

            return number % 2 === 0 ? "Even" : "Odd"
        },
        code: "function evenOrOdd(number) {\n  return number % 2 === 0 ? \"Even\" : \"Odd\"\n}",
        link: "https://www.codewars.com/kata/53da3dbb4a5168369a0000fe"
    },
    {
        id: 8,
        title: "<8 kyu> Invert Values",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }

            if (!Array.isArray(array) || array.some(isNaN)) {
                return "Invalid Input"
            }

            return array.map((invertArray) => invertArray * -1)
        },
        code: "function invert(array) {\n  return array.map((invertArray) => invertArray * -1)\n}",
        link: "https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad"
    },
    {
        id: 9,
        title: "<8 kyu> Is he gonna survive?",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }
            if (!Array.isArray(array) || array.length !== 2 || array.some(isNaN)) {
                return "Invalid Input"
            }

            const [bullets, dragons] = array

            return dragons * 2 > bullets ? false : true
        },
        code: "function hero(bullets, dragons) {\n  return dragons * 2 > bullets ? false : true\n}",
        link: "https://www.codewars.com/kata/59ca8246d751df55cc00014c"
    },
    {
        id: 10,
        title: "<8 kyu> Convert boolean values to strings 'Yes' or 'No'.",
        customFunction: (inputValue) => {
            if (inputValue === "true" || inputValue === "false") {
                const bool = inputValue === "true"
                return bool ? "Yes" : "No"
            } else {
                return "Invalid Input"
            }
        },
        code: "function boolToWord(bool) {\n  return bool ? \"Yes\" : \"No\"\n}",
        link: "https://www.codewars.com/kata/53369039d7ab3ac506000467"
    },
    {
        id: 11,
        title: "<8 kyu> Returning Strings",
        customFunction: (inputValue) => {
            return `Hello, ${inputValue} how are you doing today?`
        },
        code: "function greet(name) {\n  return `Hello, ${name} how are you doing today?`\n}",
        link: "https://www.codewars.com/kata/55a70521798b14d4750000a4"
    },
    {
        id: 12,
        title: "<7 kyu> Reverse Words",
        customFunction: (inputValue) => {
            const firstArray = inputValue.split(' ')
            const secondArray = firstArray.map(word => word.split('').reverse().join(''))
            return secondArray.join(' ')
        },
        code: "function reverseWords(str) {\n  let firstArray = str.split(' ')\n  const scndArray = firstArray.map(word => word.split('').reverse().join(''))\n  return scndArray.join(' ')\n}",
        link: "https://www.codewars.com/kata/5259b20d6021e9e14c0010d4"
    },
    {
        id: 13,
        title: "<7 kyu> List Filtering" + " (out of service)",
        customFunction: (inputValue) => {
            let array
            try {
                array = JSON.parse(inputValue).map(Number)
            } catch (anotherSolution) {
                array = inputValue.split(',').map(Number)
            }
        
            if (Array.isArray(array)) {
                const filtered = array.reduce((accumulator, currentValue) => {
                    if (typeof currentValue !== 'string'){
                      accumulator.push(currentValue)
                    }
                    return accumulator
                  }, [])
                return filtered
            } else {
                return "Invalid Input"
            }
        },
        code: "function filter_list(l) {\n  const filtered = l.reduce((accumulator, currentValue) => {\n    if (typeof currentValue !== 'string'){\n      accumulator.push(currentValue)\n    }\n    return accumulator\n  }, [])\n  return filtered\n}",
        link: "https://www.codewars.com/kata/53dbd5315a3c69eed20002dd"
    },
    {
        id: 14,
        title: "<7 kyu> Categorize New Member",
        customFunction: (inputValue) => {
            try {
                const inputArray = JSON.parse(inputValue)
                if (Array.isArray(inputArray)) {
                    const output = inputArray.map(member => {
                        if (member[1] > 7 && member[0] >= 55) {
                            return "Senior"
                        } else {
                            return "Open"
                        }
                    })
                    return output
                } else {
                    return "Invalid Input"
                }
            } catch (error) {
                return "Invalid Input"
            }
        },
        code: "function openOrSenior(data) {\n  let output = []\n  for (let i = 0 i < data.length i++){\n    if ((data[i][1] > 7) && (data[i][0] >= 55)){\n        output.push(\"Senior\")\n    }\n    else{\n        output.push(\"Open\")\n    }\n  }\n  return output\n}",
        link: "https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa"
    },
    {
        id: 15,
        title: "<7 kyu> Find the Next Perfect Square",
        customFunction: (inputValue) => {
            const sq = Number(inputValue)
            if (!isNaN(sq) && sq >= 0) {
                function isFloat(n) {
                    return Number(n) === n && n % 1 !== 0
                }
                const sqrt = Math.sqrt(sq)
                return isFloat(sqrt) ? -1 : Math.pow(sqrt + 1, 2)
            } else {
                return "Invalid Input"
            }
        },
        code: "function findNextSquare(sq) {\n  function isFloat(n) {\n    return Number(n) === n && n % 1 !== 0\n  }\n  sq = Math.sqrt(sq)\n  return (isFloat(sq) ? -1 : Math.pow(sq + 1, 2))\n}",
        link: "https://www.codewars.com/kata/56269eb78ad2e4ced1000013"
    },
]