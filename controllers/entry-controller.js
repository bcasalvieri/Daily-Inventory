const router = require('express').Router();
const { User, Entry } = require('../models');
const handle = require('../utils/promise-handler');

// C.R.U.D. METHODS

// **********
// CREATE/POST a new entry for a user
// **********
const createEntry = async (req, res) => {
  const [entryErr, entryData] = await handle(Entry.create(req.body));

  if (entryErr) {
    console.log(entryErr);
    return res.json(entryErr);
  };
  
  return User.findOneAndUpdate(
    {
      _id: "5cf00327348e3808b4427313"
    },
    {
      $push: { entries: entryData._id }
    },
    {
      new: true
    }
  )
    .then((userInfo) => {
      if (userInfo !== null) {
        return res.json(userInfo);
      };
    })
    .catch((err) => {
      return res.json(err);
    });
};


// **********
// READ/GET all entries for a user
// **********
const getAllEntries = async (req, res) => {
  const [userErr, entryData] = await handle(User.findById(req.user._id).populate('entries'));

  if (userErr) {
    return res.status(500).json(userErr)
  };

  return res.status(200).json(entryData)
};


// **********
// READ/GET a single entry by _id
// **********
const getEntryById = async (req, res) => {
  const [entryFindErr, entryData] = await handle(Entry.findById(req.params.id));

  if (entryFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(entryData) 
};


// **********
// UPDATE/PUT a note by its _id
// **********
const updateEntry = async (req, res) => {
  const [entryFindErr, entryData] = await handle(Entry.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    {
      new: true
    }
  ));

  if (entryFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(entryData) 
};


// **********
// DELETE/REMOVE a note by its _id
// **********
const deleteEntry = async (req, res) => {
  const [entryFindErr, entryData] = await handle(Entry.findByIdAndDelete(req.params.id));

  if (entryFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(entryData) 
};


module.exports = {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry
};