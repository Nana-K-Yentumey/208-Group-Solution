const mongoose = require('mongoose');
const Student = require('models/Student'); // Adjust the path as necessary

require('dotenv').config();

const mongoDBUri = process.env.MONGODB_URI;
mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    // Fetch all students
    const students = await Student.find();

    // Update each student
    students.forEach(async (student) => {
        if (Array.isArray(student.contact)) {
            student.contact = student.contact.map(Number); // Convert contact to numbers
            await student.save();
            console.log(`Updated contact for student ${student.studentID}`);
        }
    });

    console.log('Finished updating contacts');
    mongoose.connection.close();
});
