const Mentorship = require('../models/Mentorship');
const { validationResult } = require('express-validator');

// Handle fetching all mentorship programs
exports.getMentorshipPrograms = async (req, res) => {
    try {
        const mentorshipPrograms = await Mentorship.find({});
        res.json(mentorshipPrograms);
    } catch (error) {
        res.status(500).send('Server Error: Unable to retrieve mentorship programs.');
    }
};

// Handle fetching a single mentorship program by ID
exports.getMentorshipProgramById = async (req, res) => {
    try {
        const mentorshipProgram = await Mentorship.findById(req.params.id);
        if (!mentorshipProgram) {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }
        res.json(mentorshipProgram);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }
        res.status(500).send('Server Error: Unable to retrieve mentorship program.');
    }
};

// Handle creating a new mentorship program
exports.createMentorshipProgram = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMentorshipProgram = new Mentorship({
            title: req.body.title,
            description: req.body.description,
            benefits: req.body.benefits,
            structure: req.body.structure
        });

        const mentorshipProgram = await newMentorshipProgram.save();
        res.json(mentorshipProgram);
    } catch (error) {
        res.status(500).send('Server Error: Unable to create mentorship program.');
    }
};

// Handle updating an existing mentorship program
exports.updateMentorshipProgram = async (req, res) => {
    const { title, description, benefits, structure } = req.body;

    // Build mentorship program object
    const mentorshipProgramFields = {};
    if (title) mentorshipProgramFields.title = title;
    if (description) mentorshipProgramFields.description = description;
    if (benefits) mentorshipProgramFields.benefits = benefits;
    if (structure) mentorshipProgramFields.structure = structure;

    try {
        let mentorshipProgram = await Mentorship.findById(req.params.id);

        if (!mentorshipProgram) {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }

        mentorshipProgram = await Mentorship.findByIdAndUpdate(
            req.params.id,
            { $set: mentorshipProgramFields },
            { new: true }
        );

        res.json(mentorshipProgram);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }
        res.status(500).send('Server Error: Unable to update mentorship program.');
    }
};

// Handle deleting a mentorship program
exports.deleteMentorshipProgram = async (req, res) => {
    try {
        const mentorshipProgram = await Mentorship.findById(req.params.id);

        if (!mentorshipProgram) {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }

        await mentorshipProgram.remove();
        res.json({ msg: 'Mentorship program removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Mentorship program not found' });
        }
        res.status(500).send('Server Error: Unable to delete mentorship program.');
    }
};