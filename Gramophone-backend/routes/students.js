const express = require('express');
const { authenticateStudent } = require('../middleware/auth');
const StudentController = require('../controllers/studentController');
const router = express.Router();

// Middleware for student routes
// router.use(authenticateStudent);

// Student routes
router.get('/announcements', StudentController.viewGeneralAnnouncements);
router.get('/courses', StudentController.viewCourseAnnouncements);
router.get('/personal-info', StudentController.viewPersonalInfo);
router.put('/personal-info', StudentController.editPersonalInfo);
router.get('/session-details', StudentController.viewSessionDetails);
router.put('/reset-password/:studentID', StudentController.resetPassword);

module.exports = router;
