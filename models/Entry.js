const mongoose = require('mongoose');


const { Schema } = mongoose;

const EntrySchema = new Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  created: new Date(),
  resentful: {
    type: Boolean,
    required: true
  },
  resentfulNote: String,
  selfish: {
    type: Boolean,
    required: true
  },
  selfishNote: String,
  dishonest: {
    type: Boolean,
    required: true
  },
  dishonestNote: String,
  afraid: {
    type: Boolean,
    required: true
  },
  afraidNote: String,
  patient: {
    type: Boolean,
    required: true
  },
  patientNote: String,
  apology: {
    type: Boolean,
    required: true
  },
  apologyNote: String,
  prayer: {
    type: Boolean,
    required: true
  },
  prayerNote: String,
  sobriety: {
    type: Boolean,
    required: true
  },
  sobrietyNote: String,
});

module.exports = mongoose.model("Entry", EntrySchema);