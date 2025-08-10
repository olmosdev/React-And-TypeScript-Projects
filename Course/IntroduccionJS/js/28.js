// DOM - Select elements (Selectors)
// querySelector() Returns only one element (if it does not exist, returns nothing)
// querySelectorAll() Returns all elements that correspond to a previously specified selector

const heading = document.querySelector(".heading");
console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);
console.log(heading.id);

const links = document.querySelectorAll(".navegacion a");
console.log(links);

