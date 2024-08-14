const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseCode: { type: String, required: true, unique: true }, // e.g., 'Drum123'
    instrument: { type: String, required: true }, // e.g., 'Drum'
    instructorID: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true }, // Reference to Instructor
    day: { type: String, required: true }, // e.g., 'Monday'
    sessions: [{
        studentID: { type: String, required: true }, // studentID, not _id
        time: { type: String, required: true } // e.g., '2pm'
    }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
