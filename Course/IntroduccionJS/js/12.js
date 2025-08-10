//Looping through arrays with "for()"

// For
const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Nest.js", "TypeScript"];

for(let i = 0; i < 5; i++) {
    console.log(`${i} -> ${technologies[i]}`);
}

console.log("");

for(let i = 0; i < technologies.length; i++) {
    console.log(`${i} -> ${technologies[i]}`);
}

console.log("");

// forEach. The "forEach loop" is a method that executes a given function for each element of the array
// ((It already knows the number of existing elements and will run only that many times))
technologies.forEach(function(tech) {
    console.log(tech);
});

console.log("");

// mao() 
// What is the difference between forEach() and map()? The difference is that map() generates a new array
// Check this out! https://doesitmutate.xyz/
// forEach() is an alternative to the for() loop
const arrayForEach = technologies.forEach(function(tech) {
    return tech;
});
console.log(arrayForEach);

const arrayMap = technologies.map(function(tech) {
    return tech;
});
console.log(arrayMap);

console.log("");

// for ... of (like a kind of syntactic sugar)
for(let tech of technologies) {
    console.log(tech);
}
