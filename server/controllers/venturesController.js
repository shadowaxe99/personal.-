const Ventures = require('../models/Ventures');
const { validationResult } = require('express-validator');

// Handle fetching all ventures
exports.getVentures = async (req, res) => {
    try {
        const ventures = await Ventures.find();
        res.json(ventures);
    } catch (error) {
        res.status(500).send('Server Error: Unable to fetch ventures.');
    }
};

// Handle fetching a single venture by ID
exports.getVentureById = async (req, res) => {
    try {
        const venture = await Ventures.findById(req.params.id);
        if (!venture) {
            return res.status(404).json({ msg: 'Venture not found' });
        }
        res.json(venture);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Venture not found' });
        }
        res.status(500).send('Server Error: Unable to fetch venture.');
    }
};

// Handle creating a new venture
exports.createVenture = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newVenture = new Ventures({
            title: req.body.title,
            description: req.body.description,
            achievements: req.body.achievements,
            // Add other fields as necessary
        });

        const venture = await newVenture.save();
        res.json(venture);
    } catch (error) {
        res.status(500).send('Server Error: Unable to create venture.');
    }
};

// Handle updating an existing venture
exports.updateVenture = async (req, res) => {
    const { title, description, achievements } = req.body;

    // Build venture object
    const ventureFields = {};
    if (title) ventureFields.title = title;
    if (description) ventureFields.description = description;
    if (achievements) ventureFields.achievements = achievements;
    // Add other fields as necessary

    try {
        let venture = await Ventures.findById(req.params.id);
        if (!venture) {
            return res.status(404).json({ msg: 'Venture not found' });
        }

        venture = await Ventures.findByIdAndUpdate(
            req.params.id,
            { $set: ventureFields },
            { new: true }
        );

        res.json(venture);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Venture not found' });
        }
        res.status(500).send('Server Error: Unable to update venture.');
    }
};

// Handle deleting a venture
exports.deleteVenture = async (req, res) => {
    try {
        const venture = await Ventures.findById(req.params.id);
        if (!venture) {
            return res.status(404).json({ msg: 'Venture not found' });
        }

        await venture.remove();
        res.json({ msg: 'Venture removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Venture not found' });
        }
        res.status(500).send('Server Error: Unable to delete venture.');
    }
};