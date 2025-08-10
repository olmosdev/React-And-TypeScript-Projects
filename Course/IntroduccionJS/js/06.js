// Destructuring of two or more objects

const product = {
    name: "Laptop Asus",
    price: 5340.40,
    available: false
}

const customer = {
    name: "Zaphia",
    premium: true,
    address: {
        street: "Cerro De La Silla"
    }
}

const { name } = product;
// const { name: customerName, address: street } = customer; Renaming the object "address"
const { name: customerName, address: { street } } = customer; // Accessing the "address" object
console.log(name);
console.log(customerName);
console.log(street);