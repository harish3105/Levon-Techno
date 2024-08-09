const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  experience: { type: Number, required: true },
});

module.exports = mongoose.model('Teacher', TeacherSchema);
