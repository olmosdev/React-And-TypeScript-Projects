// DOM - Submit event

const form = document.querySelector("#formulario");
form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    console.log(name);
    const password = document.querySelector("#password").value;
    console.log(password);

    if(name === "" || password === "") {
        console.log("Fill out all required fields");
    } else {
        console.log("Sending data...");
    }
});

