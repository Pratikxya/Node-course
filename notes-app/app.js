const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail("hello@gmail.com"));

const greenMsg = chalk.green.inverse.bold("Success!");
console.log(greenMsg);
