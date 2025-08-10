// Objects
const food = {
    name: "Double Cheeseburger",
    price: 99.99,
    inMenu: true
}

// To have access
console.log(food);
console.log(typeof food);
console.table(food);
console.log(food.name);
console.log(food.price);
console.log(food.inMenu);

// Old JavaScript version
const food_name = food.name;
console.log(food_name);

// Destructuring (Starting from EcmaScript 6)
const { name } = food;
const { price, inMenu } = food;
console.log(name);
console.log(price);
console.log(inMenu);

// Object Literal Enhacement
const user = "Yahana";
const authenticated = true;
const user2 = "Nalidia";

const object1 = {
    user: user,
    authenticated: authenticated
}
console.log(object1);

const object2 = {
    user,
    authenticated
}
console.log(object2);

const object3 = {
    user: user2,
    authenticated
}
console.log(object3);


