const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req, res) => {
    console.log(req.body);
    readAndAppend(req.body, './db/db.json');
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.delete('/', (req, res) => {
    const noteBody = req.params.title;
    console.log(noteBody);
});

module.exports = notes;