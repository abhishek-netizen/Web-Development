// Functional composition

//Without functions
// let input = " JavaScript ";
// let output = "<div>" + input.trim() + "</div>";
// console.log(output)  //<div>JavaScript</div>

// With function making reusable code
// const trim = str => str.trim();
// const wrapDiv = str => `<div>${str}</div>`

// const result = wrapDiv(trim("JavaSCript"))
// console.log(result);

const trim = function trim(str) {
    return str.trim();
}

const wrapDiv = function wrapDiv(str) {
    return `<div>${str}</div>`
}

const toLowerCase = function toLowerCase(str) {
    return str.toLowerCase();
}

const result = wrapDiv(trim(toLowerCase(("JAVASCRIPT"))))
console.log(result);