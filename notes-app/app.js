const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Pratikshya.");

fs.appendFileSync("notes.txt", " I am a learner.");
