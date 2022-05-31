const getNotes = require("./notes.js");
const validator = require("validator");

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail("hello@gmail.com"));
