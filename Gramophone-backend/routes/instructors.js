const express = require('express');
const router = express.Router();
const Instructor = require('../models/Instructor');

// Get all instructors
router.get('/', async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.json(instructors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific instructor
router.get('/:instructorID', getInstructor, (req, res) => {
    res.json(res.instructor);
});

// Create a new instructor
router.post('/', async (req, res) => {
    const instructor = new Instructor(req.body);
    try {
        const newInstructor = await instructor.save();
        res.status(201).json(newInstructor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an instructor
router.put('/:id', getInstructor, async (req, res) => {
    Object.assign(res.instructor, req.body);
    try {
        const updatedInstructor = await res.instructor.save();
        res.json(updatedInstructor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an instructor
router.delete('/:id', getInstructor, async (req, res) => {
    try {
        await res.instructor.remove();
        res.json({ message: 'Instructor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get an instructor by ID
async function getInstructor(req, res, next) {
    let instructor;
    try {
        instructor = await Instructor.findById(req.params.id);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.instructor = instructor;
    next();
}

module.exports = router;
