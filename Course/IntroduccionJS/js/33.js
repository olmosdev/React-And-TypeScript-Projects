// Validating forms and displaying alerts

const form = document.querySelector("#formulario");
form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const password = document.querySelector("#password").value;

    // Prevent new alerts
    const advanceAlert = document.querySelector(".alerta");
    advanceAlert?.remove(); // Optional chaining (?.)

    const _alert = document.createElement("DIV");
    _alert.textContent = "Example of alert";
    _alert.classList.add("alerta", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black");

    if(name === "" || password === "") {
        _alert.textContent = "Fill out all required fields";
        _alert.classList.add("bg-red-500");
    } else {
        _alert.textContent = "Sending data...";
        _alert.classList.add("bg-green-500");
    }

    console.log(_alert);
    form.appendChild(_alert);

    setTimeout(() => {
        // This removes an element from the html code
        _alert.remove();
    }, 3000); // ms
});

