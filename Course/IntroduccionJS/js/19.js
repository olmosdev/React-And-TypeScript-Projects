// non-strict comparator (==) vs strict comparator (===)

const number1 = 20;
const number2 = "20";

if(number1 == number2) { // It compares values only
    console.log("They're the same");
} else {
    console.log("They are not the same");
}

if(number1 === number2) { // It compares values and type of variables
    console.log("They're the same");
} else {
    console.log("They are not the same");
}
