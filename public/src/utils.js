
console.log('utils.js is running');

const square = (x) => x*x;
//export const square = (x) => x*x;

const add = (a, b) => a + b;

const subtract = (a,b) => a - b;

//another way to export
export{square, add, subtract as default};

//exports - default export - named exports