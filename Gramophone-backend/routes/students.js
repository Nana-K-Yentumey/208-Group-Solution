"use strict"; // Enable strict mode

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Middleware to get a student by ID
async function getStudent(req, res, next) {
    let student;
    try {
        student = await Student.findOne({studentID: req.params.studentID});
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.student = student;
    next();
}
// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific student
router.get('/:studentID', getStudent, (req, res) => {
    res.json(res.student);
});

// Create a new student
router.post('/', async (req, res) => {
    const student = new Student(req.body);
    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a student
router.patch('/:studentID', getStudent, async (req, res) => {
    // Update only the fields that are provided in the request body
    Object.keys(req.body).forEach((key) => {
        // Special handling for contact field to ensure it's an array
        if (key === 'contact') {
            res.student[key] = Array.isArray(req.body[key]) ? req.body[key] : [req.body[key]];
        } else {
            res.student[key] = req.body[key];
        }
    });

    try {
        const updatedStudent = await res.student.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a student
router.delete('/:studentID', getStudent, async (req, res) => {
    try {
        await res.student.remove();
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
