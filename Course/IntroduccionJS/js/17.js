// Array methods (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numbers = [10, 20, 30];

// Filter Receiving a callback (higher order function (function that takes another function))
const newArray = technologies.filter(tech => tech !== "HTML");
console.log(newArray);

// Includes (If an element exists in an array)
const result = technologies.includes("CSS");
console.log(result);

// Some (Returns "True" if at least one meets the condition)
console.log(numbers);
const anyResult = numbers.some(number => number > 15);
console.log(anyResult);
const filteredArray = numbers.filter(number => number > 15);
console.log(`${filteredArray.length} -> ${filteredArray}`);

// Find (Returns the first element that meets a condition)
const firstElement = numbers.find(number => number > 15);
console.log(firstElement);

// Every (Returns "True" or "False" if all meet a condition)
const _result = numbers.every(number => number > 5);
console.log(_result);

// Reduce (Returns a cumulative total)
const myResult = numbers.reduce((total, currentNumber) => {
    console.log("Total:", total);
    console.log("Current number:", currentNumber);
    return total + currentNumber;
}, 0);
console.log(myResult);

const _myResult = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
console.log(_myResult);

