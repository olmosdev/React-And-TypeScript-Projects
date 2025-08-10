// Array Destructuring

const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

// Classic access
const _react = technologies[3];
console.log(_react);

// Extract based on position
const [w, ww, www, wwww] = technologies;
console.log(`${w} ${ww} ${www} ${wwww}`);

const [html, css, js] = technologies;
console.log(`${html} ${css} ${js}`);

const [ , , , reactjs ] = technologies;
console.log(reactjs);