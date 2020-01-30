//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'Hi, this is created by NodeJs')
//fs.appendFileSync('notes.txt', 'Append txt by Node')
const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

yargs.version('1.1.0')


//Add command
yargs.command({
    command: 'add',
    describe: 'add notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
    }
}).parse();
//Remove command
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    handler: function() {
        console.log('Removing notes')
    }
}).parse();
//List command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function() {
        console.log('Listing notes')
    }
}).parse();
//Read command
yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function() {
        console.log('Reading notes')
    }
}).parse();
console.log(yargs.argv);