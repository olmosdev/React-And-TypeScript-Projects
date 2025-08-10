// Fetch API with Async / Await

const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url)
//     .then((response) => {
//         if(response.ok) {
//             console.log(response);
//             return response.json();
//         }
//         throw new Error("There is somehing wrong");
//     })
//     .then(data => console.log(data))
//    .catch(error => console.log(error.message)); 

const queryAPI = async () => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("There is somehing wrong");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

queryAPI();



