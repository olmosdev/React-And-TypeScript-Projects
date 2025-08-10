// Function Expression

const makeSum = function(firstNumber = 0, secondNumber = 0) { 
    console.log(firstNumber + secondNumber);
} 

makeSum();
makeSum(10);
makeSum(25, 30);

// Difference between Function Expression and Function Declaration

doSomething();
doSomething();
doSomethingNew();
doSomethingNew();

function doSomething() {
    console.log("UWU");
}

const doSomethingNew = function() {
    console.log("EWE");
}

