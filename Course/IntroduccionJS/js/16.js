// Functions that return values

const _makeSum = function(firstNumber = 0, secondNumber = 0) { 
    return firstNumber + secondNumber;
} 

function makeSum(firstNumber = 0, secondNumber = 0) { 
    return firstNumber + secondNumber;
}

// "return" keyword is not required when there is only one line of code (in this case)
const __makeSum = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber; 

const _r = _makeSum(10, 30);
console.log(_r);

const r = makeSum(10, 20);
console.log(r);

const __r = __makeSum(10, 10);
console.log(__r);
