const Controversies = require('../models/Controversies');
const { validationResult } = require('express-validator');

// Handle fetching all controversies
exports.getAllControversies = async (req, res) => {
    try {
        const controversies = await Controversies.find();
        res.json(controversies);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle fetching a single controversy by ID
exports.getControversyById = async (req, res) => {
    try {
        const controversy = await Controversies.findById(req.params.id);
        if (!controversy) {
            return res.status(404).json({ msg: 'Controversy not found' });
        }
        res.json(controversy);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Controversy not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle creating a new controversy
exports.createControversy = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newControversy = new Controversies({
            title: req.body.title,
            description: req.body.description,
            resolution: req.body.resolution,
            date: req.body.date
        });

        const controversy = await newControversy.save();
        res.json(controversy);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle updating an existing controversy
exports.updateControversy = async (req, res) => {
    const { title, description, resolution, date } = req.body;

    // Build controversy object
    const controversyFields = {};
    if (title) controversyFields.title = title;
    if (description) controversyFields.description = description;
    if (resolution) controversyFields.resolution = resolution;
    if (date) controversyFields.date = date;

    try {
        let controversy = await Controversies.findById(req.params.id);
        if (!controversy) {
            return res.status(404).json({ msg: 'Controversy not found' });
        }

        controversy = await Controversies.findByIdAndUpdate(
            req.params.id,
            { $set: controversyFields },
            { new: true }
        );

        res.json(controversy);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Controversy not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle deleting a controversy
exports.deleteControversy = async (req, res) => {
    try {
        const controversy = await Controversies.findById(req.params.id);
        if (!controversy) {
            return res.status(404).json({ msg: 'Controversy not found' });
        }

        await controversy.remove();
        res.json({ msg: 'Controversy removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Controversy not found' });
        }
        res.status(500).send('Server Error');
    }
};