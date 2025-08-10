// DOM - CLICK Event
// https://developer.mozilla.org/es/docs/Web/API/Element
const heading = document.querySelector(".heading");
const links = document.querySelectorAll(".navegacion a");

// Using callbacks
heading.addEventListener("mouseenter", () => {
    heading.textContent = "Alchemy!"
});

heading.addEventListener("mouseleave", () => {
    heading.textContent = "Goodbye!"
});

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // canceling the action that the "a" tag does by default
        console.log(event);
        console.log(event.target);
        console.log("You clicked on this link");
        event.target.textContent = "You clicked";
    });
});

