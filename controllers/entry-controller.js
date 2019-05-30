const { Entry } = require('../models');

// C.R.U.D. METHODS

// CREATE/POST a new entry
function createEntry(req, res) {
  Entry.create(req.body)
    .then((dbEntryData) => {
      res.status(200).json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// READ/GET all entries
function getAllEntries(req, res) {
  Entry.find({})
    .then((dbEntryData) => {
      res.status(200).json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// READ/GET a single entry by _id
function getEntryById(req, res) {
  Entry.find(req.params.id)
    .then((dbEntryData) => {
      res.status(200).json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// UPDATE/PUT a note by its _id
function updateEntry(req, res) {
  Entry.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        // fill out data to set
      }
    }
  )
    .then((dbEntryData) => {
      res.status(200).json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// DELETE/REMOVE a note by its _id
function deleteEntry(req, res) {
  Entry.remove({
    _id: req.params.id
  })
    .then((dbEntryData) => {
      res.status(200).json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry
};