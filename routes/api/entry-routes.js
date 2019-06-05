const router = require('express').Router();
const authCheck = require('../../middleware/authentication');
const {
  createEntry,
  getEntryById,
  updateEntry,
  deleteEntry
} = require('../../controllers/entry-controller');

// set up authentication middleware for these routes
// router.use(authCheck);

// GET and POST routes for /api/entry
router
  .route('/')
  .post(createEntry);

// GET/PUT/DELETE routes for /api/entry/:id
router
  .route('/:id')
  .get(getEntryById)
  .put(updateEntry)
  .delete(deleteEntry);

  module.exports = router;