const path = require('path');
const { Router } = require('express');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

var router = Router();
const db = lowdb(new FileSync(path.join(__dirname, 'db.json')));

db.defaults({ notes: [] }).write();

router.get('/notes', function(req, res) {
  const notes = db.get('notes');
  res.send(notes.value());
});

router.post('/notes', function(req, res) {
  const note = req.body;

  db.get('notes')
    .push(note)
    .write();

  res.end();
});

router.get('/notes/:noteId', function(req, res) {
  const { noteId } = req.params;
  const note = db.get('notes').find({ _id: noteId });
  res.send(note.value());
});

router.put('/notes/:noteId', function(req, res) {
  const { noteId } = req.params;
  const note = req.body;

  db.get('notes')
    .find({ _id: noteId })
    .set(note)
    .write();

  res.end();
});

router.delete('/notes/:noteId', function(req, res) {
  var { noteId } = req.params;

  db.get('notes')
    .find({ _id: noteId })
    .remove()
    .write();

  res.end();
});

module.exports = router;
