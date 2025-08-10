// Modifying arrays
// https://doesitmutate.xyz/

const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node"];
console.table(technologies);

// Replacing elements of an array
technologies[4] = "Node.js";
console.table(technologies);

// Adding elements
technologies[5] = "Next.js";
technologies.push("TypeScript");
console.table(technologies);
// In react, you always have to work with functions that do not directly modify something known as "state"
const newTechnologies = ["Deno", ...technologies, "Bun"];
console.table(newTechnologies);

// Deleting elements
newTechnologies.shift(); // Deleting at the beginning
console.table(newTechnologies);
// "filter" allows you to remove or keep elements based on a certain condition
const newTechnologies2 = newTechnologies.filter(function(tech) {
    if(tech !== "HTML") {
        return tech;
    }
});
console.table(newTechnologies2);

// Replacing elements without modifying the original array
const newTechnologies3 = newTechnologies2.map(function(tech) {
    if(tech === "Node.js") {
        return "NODE.JS";
    } else {
        return tech;
    }
});
console.table(newTechnologies3);

