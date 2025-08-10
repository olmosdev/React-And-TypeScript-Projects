// Undefined
let something;
console.log(something);
console.log(typeof something);
let something2 = undefined;
console.log(something2);
console.log(typeof something2);

// String
const name = "Anytia";
console.log(name);
console.log(typeof name);
const name2 = String("Uwu");
console.log(name2);
console.log(typeof name2);

// Number
const number = 20.20;
console.log(number);
console.log(typeof number);
const number1 = 100;
console.log(number1);
console.log(typeof number1);
const number2 = -50;
console.log(number2);
console.log(typeof number2);

// BigInt (In new Javascript version)
const myNumber = BigInt(654654621321654685413874321413211);
console.log(myNumber);
console.log(typeof myNumber);

// Boolean
const signal = true; // or false
console.log(signal);
console.log(typeof signal);

// Null
const box = null;
console.log(box);
console.log(typeof box);

// Symbol (each Symbol is different from others. Each Symbol is unique, it's not repeated)
const firstSymbol = Symbol(30);
const secondSymbol = Symbol(30);
console.log(firstSymbol == secondSymbol);
console.log(firstSymbol === secondSymbol);
