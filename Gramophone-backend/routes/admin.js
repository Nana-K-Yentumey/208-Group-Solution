"use strict";

const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const Announcement = require('../models/Announcement');
const authenticateAdmin = require('../middleware/auth');
const router = express.Router();

// Admin login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.session.adminId = admin._id;
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Admin logout route
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed.' });
        }
        res.status(200).json({ message: 'Logout successful.' });
    });
});

// Add an announcement
router.post('/announcements', authenticateAdmin, async (req, res) => {
    const announcement = new Announcement(req.body);
    try {
        const newAnnouncement = await announcement.save();
        res.status(201).json(newAnnouncement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all announcements
router.get('/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.json(announcements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific announcement
router.get('/announcements/:id', async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.json(announcement);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an announcement
router.put('/announcements/:id', authenticateAdmin, async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.json(announcement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an announcement
router.delete('/announcements/:id', authenticateAdmin, async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id);
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.json({ message: 'Announcement deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
