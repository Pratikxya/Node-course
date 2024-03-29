const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//create add command

yargs
  .command({
    command: "add",
    describe: "Add a note",
    builder: {
      title: {
        describe: "Title of the note",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Body of the note",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.addNote(argv.title, argv.body);
    },
  })
  .parse();

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

console.log(yargs.argv);

// yargs.parse();
