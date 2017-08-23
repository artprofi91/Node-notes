const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }

}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notes = fetchNotes();
    var tutuk = {
        title,
        body
    };
    var duplicateNotes = notes.filter((tutuk) => tutuk.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(tutuk);
        saveNotes(notes);
        return tutuk;
    }

};
var getAll = () => {
    return fetchNotes();
};
var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((tutuk) => tutuk.title === title);
    return filteredNotes[0];

};
var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((tutuk) => tutuk.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};
var logNote = (tutuk) => {
    debugger;
    console.log('--');
    console.log(`Title: ${tutuk.title}`);
    console.log(`Body: ${tutuk.body}`);
};
module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};