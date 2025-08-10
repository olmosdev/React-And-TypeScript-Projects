// Ternary operator

const balance = 1000;
const toPay = 1200;
const card = true;
const auth = true;

auth ? console.log("User authenticated") : console.log("User not authenticated");

auth ? 
    console.log("User authenticated") : 
    console.log("User not authenticated");

balance > toPay ? 
    console.log("You can afford it") :
    card ? 
        console.log("You can use your card") : 
        console.log("You can't afford it");
// Shift + Tab
balance > toPay || card ? 
    console.log("You can afford it") : 
    console.log("You can't afford it");
