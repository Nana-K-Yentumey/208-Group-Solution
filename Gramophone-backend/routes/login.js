"use strict"; // Enable strict mode

const express = require('express');
const { Schema, model } = require('mongoose');
const { compare } = require('bcrypt');
const router = express.Router();

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model('User', userSchema);

router.post('/', async (req, res) => { //I used the base route because the /login is already defined in the server.js
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
