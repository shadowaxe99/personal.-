const TalentX = require('../models/TalentX');
const { validationResult } = require('express-validator');

// Handle fetching Talent X Entertainment details
exports.getTalentXDetails = async (req, res) => {
    try {
        const talentXDetails = await TalentX.find();
        res.status(200).json(talentXDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Talent X details', error });
    }
};

// Handle creating new Talent X Entertainment entry
exports.createTalentXEntry = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newTalentXEntry = new TalentX({
            ...req.body
        });

        const savedEntry = await newTalentXEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error creating new Talent X entry', error });
    }
};

// Handle updating Talent X Entertainment entry
exports.updateTalentXEntry = async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedEntry = await TalentX.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEntry) {
            return res.status(404).json({ message: 'Talent X entry not found' });
        }
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating Talent X entry', error });
    }
};

// Handle deleting Talent X Entertainment entry
exports.deleteTalentXEntry = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEntry = await TalentX.findByIdAndDelete(id);
        if (!deletedEntry) {
            return res.status(404).json({ message: 'Talent X entry not found' });
        }
        res.status(200).json({ message: 'Talent X entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Talent X entry', error });
    }
};