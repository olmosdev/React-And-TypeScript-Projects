// Manipulating elements
const heading = document.querySelector(".heading");
const links = document.querySelectorAll(".navegacion a");

heading.textContent = "A new heading :)";
heading.id = "headingId";
heading.removeAttribute("class");

const nameInput = document.querySelector("#nombre");
nameInput.value = "Example of value";

links.forEach(link => link.textContent = "New link");

