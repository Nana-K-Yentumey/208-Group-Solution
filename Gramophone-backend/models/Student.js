const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    guardian_name: String,
    contact: String,
    mail: String,
    student_name: String,
    instrument: String,
    age: Number,
    location: String,
    tutor_assigned: String,
    schedule: String,
    consent_form: String,
    date_started: Date
});

module.exports = mongoose.model('Student', studentSchema);
