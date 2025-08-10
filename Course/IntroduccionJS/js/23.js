// Short-circuit evaluation
// https://sentry.io/answers/truthy-and-falsy-values-in-javascript/
// https://developer.mozilla.org/es/docs/Glossary/Truthy


// Truthy
if(new Date()) { // true, [], {}, etc
    console.log("Truthy");
} else {
    console.log("Falsy");
}


// Falsy
if(false) { // 0, -0, false
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Use and Usage
const user = {};
user && console.log("User authenticated");