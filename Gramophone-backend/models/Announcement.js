const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
});

module.exports = mongoose.model('Announcement', announcementSchema);
