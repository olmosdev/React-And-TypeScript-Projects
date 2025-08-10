// DOM - Input Event

const nameInput = document.querySelector("#nombre");
nameInput.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const passwordInput = document.querySelector("#password");
passwordInput.addEventListener("input", passwordFunction);

function passwordFunction() {
    passwordInput.type = "text";

    setTimeout(() => {
        passwordInput.type = "password";
    }, 300);
}



