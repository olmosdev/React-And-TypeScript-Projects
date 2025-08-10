// Mnipulating objects

const product = {
    name: "Laptop HP",
    price: 5340.40,
    available: false
}
console.log(product);

// Rewriting a value
product.available = true;
console.log(product);

// If it does not exist, it's added
product.image = "image.jpg";
console.log(product);

// Deleting a property
delete product.price;
console.log(product);


const product2 = {
    name: "Laptop Dell",
    price: 5340.40,
    available: false
}
console.log(product2);

// On the object that is being applied, this object becomes immutable
Object.freeze(product2);

// Rewriting a value
product2.available = true;
console.log(product2);

// If it does not exist, it's added
product2.image = "image.jpg";
console.log(product2);

// Deleting a property
delete product2.price;
console.log(product2);


const product3 = {
    name: "Laptop Asus",
    price: 5340.40,
    available: false
}
console.log(product3);

// Only existing properties can be modified. Can't add or remove anything
Object.seal(product3);

// Rewriting a value
product3.available = true;
console.log(product3);

// If it does not exist, it's added
product3.image = "image.jpg";
console.log(product3);

// Deleting a property
delete product3.price;
console.log(product3);

