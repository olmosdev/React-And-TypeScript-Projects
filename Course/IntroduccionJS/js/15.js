// Arrow funtions

const makeSum = (firstNumber = 0, secondNumber = 0) => { 
    console.log(firstNumber + secondNumber);
} 

makeSum();
makeSum(10);
makeSum(25, 30);

const doSomething = (message) => console.log(`-> ${message}`);

doSomething("Something");

doSomethingNew("Something");
const doSomethingNew = (message) => console.log(`-> ${message}`);
