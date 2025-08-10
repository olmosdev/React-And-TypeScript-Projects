// Template String and Concatenation

const product = "Double CheeseBurger";
const price = 99.99;
const brand = "Burger King";

console.log("You ordered: " + product);
console.log("You ordered:", product);

console.log(brand + " offers " + product + " for only $" + price);
console.log(`${brand} offers ${product} for only $${price}`); // Backtick
