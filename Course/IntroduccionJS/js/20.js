// Logical And (&&) / Logical Or (||)

const balance = 1000;
const toPay = 1200;
const card = true;

if(balance > toPay) {
    console.log("You can afford it");
} else if (card) {
    console.log("You can afford it");
} else {
    console.log("You cannot afford it");
}

console.log("");

if(balance > toPay || card) {
    console.log("You can afford it");
} else {
    console.log("You cannot afford it");
}

console.log("");

if(balance > toPay && card) {
    console.log("You can afford it");
} else {
    console.log("You cannot afford it");
}
