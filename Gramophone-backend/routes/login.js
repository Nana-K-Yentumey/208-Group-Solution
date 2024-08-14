

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Student = require('../models/Student');
const Instructor = require('../models/Instructor');

router.post('/', async (req, res) => {
    const { username, password, role } = req.body; // Role should be specified to differentiate user types

    try {
        console.log('Login attempt:', { username, role });

        let user;

        // Query based on role
        switch (role) {
            case 'admin':
                user = await Admin.findOne({ username });
                if (!user) {
                    console.log('Admin not found');
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                break;

            case 'student':
                user = await Student.findOne({ studentID: username });
                if (!user) {
                    console.log('Student not found');
                    return res.status(401).json({ message: 'Invalid student ID' });
                }
                break;

            case 'instructor':
                user = await Instructor.findOne({ instructorID: username });
                if (!user) {
                    console.log('Instructor not found');
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                break;

            default:
                console.log('Invalid role provided');
                return res.status(400).json({ message: 'Invalid role' });
        }

        // Password verification for admin and instructor only
        if (role === 'admin' || role === 'instructor') {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log('Password mismatch');
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        }

        // Generate token
        const token = jwt.sign({ userId: user._id, type: role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token generated:', token);

        res.status(200).json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
