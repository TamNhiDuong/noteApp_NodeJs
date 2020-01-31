const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your notes..."
} 
const addNotes = function(title, body) {
    const notes = loadNotes()
    console.log(notes)
    const duplicateNote = notes.filter(function(note) {
        return note.title === title
    })
    console.log('duplicate?' + duplicateNote)
    if (duplicateNote.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    }
    else {
        console.log('duplicate title')
    }
}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
const removeNotes = function(title) {
        const notes = loadNotes()
        const keepedNotes = notes.filter(function(note) {
            return note.title !== title
        })
        saveNotes(keepedNotes)
    if (keepedNotes.length < notes.length) {
        console.log(chalk.green('Note removed!'))
    }
    else {
        console.log(chalk.red('No note found'))
    }
}

module.exports = {
    getNotes: getNotes,
    loadNotes: loadNotes,
    addNotes: addNotes,
    saveNotes: saveNotes,
    removeNotes: removeNotes,
};