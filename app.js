const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const note = require('./note.js');
const titleOptions = {
    descride:'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleOptions,
})
.command('remove', 'Remove a note', {
    title: titleOptions,
})
.help()
.argv;
var command = argv._[0];



if (command === 'add') {
    console.log('Adding new note');
    var tutuk = note.addNote(argv.title, argv.body);
    if (tutuk) {
        console.log('Note created');
        note.logNote(tutuk);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = note.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((tutuk) => note.logNote(tutuk));
} else if (command === 'read') {
    var tutuk = note.readNote(argv.title);
    if (tutuk) {
        console.log('Note found');
        note.logNote(tutuk);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = note.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}