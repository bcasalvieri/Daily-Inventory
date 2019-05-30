const router = require('express').Router();
const {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry
} = require('../../controllers/entry-controller');

// GET and POST routes for /api/entry
router
  .route('/')
  .get(getAllEntries)
  .post(createEntry);

// GET/PUT/DELETE routes for /api/entry/:id
router
  .route('/:id')
  .get(getEntryById)
  .put(updateEntry)
  .delete(deleteEntry);

  module.exports = router;