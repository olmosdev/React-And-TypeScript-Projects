// Joining two or more objects

const product = {
    name: "Laptop Asus",
    price: 5340.40,
    available: false
}

const customer = {
    name: "Zaphia",
    premium: true
}

const _shoppingCar = {
    quantity: 1,
    product
}
console.log(_shoppingCar);

const shoppingCar = {
    quantity: 1,
    ...product // spread operator
}
console.log(shoppingCar);

const _compositeObject = {
    product: {...product},
    customer: {...customer}
}
console.log(_compositeObject);

const compositeObject = {
    product,
    customer
}
console.log(compositeObject);

// In this case, the key "name" of the object "product" will be replaced by the value "name" that the object "customer" has.
const _mixedAttributes = {
    ...product,
    ...customer
}
console.log(_mixedAttributes);

const mixedAttributes = Object.assign(product, customer);
console.log(mixedAttributes);