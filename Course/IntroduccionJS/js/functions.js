// ECMAScript Modules

export function add(number1, number2) {
    return number1 + number2;
}

export const subtract = (number1, number2) => number1 - number2;

const saySomething = function() {
    console.log("UWU");
}

const saySomething2 = () => console.log("OWO");

//export default function multiply(number1, number2) {
//    return number1 * number2;
//}
const multiply = (number1, number2) => number1 * number2;
export default multiply;

export {
    saySomething,
    saySomething2
}
