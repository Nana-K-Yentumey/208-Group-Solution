"use strict";

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // I replaced bodyParser.json() with express.json()
app.use(cors()); 

// MongoDB connection
const mongoDBUri = process.env.MONGODB_URI;
mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import routes
const loginRoutes = require('./routes/login'); // Import login routes
const studentRoutes = require('./routes/students'); // Import student routes
const instructorRoutes = require('./routes/instructors');
const attendanceRoutes = require('./routes/attendance');
const sessionLogRoutes = require('./routes/sessionLogs');
const announcementRoutes = require('./routes/announcements');
const resourceRoutes = require('./routes/resources');

// Use routes
app.use('/login', loginRoutes); // Use login routes
app.use('/students', studentRoutes); // Use student routes
app.use('/instructors', instructorRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/sessionLogs', sessionLogRoutes);
app.use('/announcements', announcementRoutes);
app.use('/resources', resourceRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Please drawer my attention for any errors.
