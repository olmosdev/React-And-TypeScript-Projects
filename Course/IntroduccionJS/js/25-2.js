// Fetch API with Promises

const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
    .then((response) => {
        if(response.ok) {
            console.log(response);
            return response.json();
        }
        throw new Error("There is somehing wrong");
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message)); // Executed only when there is no internet conecction 


