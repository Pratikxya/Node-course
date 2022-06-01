const getNotes = require("./notes.js");
const chalk = require("chalk");

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note");
  console.log(chalk.green.inverse("Your note is added"));
} else if (command === "remove") {
  console.log("Removing note");
}
