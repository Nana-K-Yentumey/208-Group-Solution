const Student = require('../models/Student');
const Announcement = require('../models/Announcement');
const Course = require('../models/Course');
const Instructor = require('../models/Instructor');

const StudentController = {
  // View all general announcements
  viewGeneralAnnouncements: async (req, res) => {
    try {
      const announcements = await Announcement.find();
      res.status(200).json(announcements);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve announcements', error: err.message });
    }
  },

  // View course-specific announcements
  viewCourseAnnouncements: async (req, res) => {
    const { courseCode } = req.params;
    try {
      const course = await Course.findOne({ courseCode });
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      const announcements = await Announcement.find({ courseCode });
      res.status(200).json(announcements);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve course announcements', error: err.message });
    }
  },

  // View personal information
  viewPersonalInfo: async (req, res) => {
    try {
      const student = await Student.findOne({ studentID: req.user.userId });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve personal information', error: err.message });
    }
  },

  // Edit personal information
  editPersonalInfo: async (req, res) => {
    const updateData = req.body;
    try {
      const student = await Student.findOneAndUpdate({ studentID: req.user.userId }, updateData, { new: true });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Personal information updated successfully', student });
    } catch (err) {
      res.status(500).json({ message: 'Failed to update personal information', error: err.message });
    }
  },

  // View session details along with all instructor details
  viewSessionDetails: async (req, res) => {
    try {
      const student = await Student.findOne({ studentID: req.user.userId });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const sessions = await Course.find({
        'sessions.studentID': student._id
      }, {
        'sessions.$': 1,
        courseCode: 1,
        instrument: 1,
        day: 1,
        instructorID: 1
      });

      if (!sessions.length) {
        return res.status(404).json({ message: 'No sessions found' });
      }

      const sessionDetails = await Promise.all(sessions.map(async (session) => {
        const instructor = await Instructor.findById(session.instructorID);

        return {
          courseCode: session.courseCode,
          instrument: session.instrument,
          day: session.day,
          time: session.sessions[0].time,
          instructorDetails: {
            name: instructor.instructorName,
            email: instructor.email,
            contact: instructor.contact,
            qualifications: instructor.qualifications,
            bio: instructor.bio,
            reviews: instructor.reviews
          }
        };
      }));

      res.status(200).json(sessionDetails);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve session details', error: err.message });
    }
  }
};

module.exports = StudentController;
