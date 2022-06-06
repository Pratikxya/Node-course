const { info } = require("console");
const fs = require("fs");

//Challenge : Working with JSON and the file system

// 1.Load and parse the JSON data
// 2. Change the name1 and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4..Test your work by viewing the data in the JSON File.

const dataBuffer = fs.readFileSync("json1.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Mike";
user.age = 30;

const userJSON = JSON.stringify(user);
fs.writeFileSync("json1.json", userJSON);
