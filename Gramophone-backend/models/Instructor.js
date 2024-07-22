const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    instrument: String,
    bio: String,
});

module.exports = mongoose.model('Instructor', instructorSchema);
