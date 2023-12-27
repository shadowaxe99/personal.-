const Network = require('../models/Network');
const { validationResult } = require('express-validator');

// Handle fetching the celebrity network details
exports.getCelebrityNetwork = async (req, res) => {
    try {
        const networkDetails = await Network.find({});
        res.status(200).json(networkDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching network details', error: error });
    }
};

// Handle creating a new celebrity network entry
exports.createCelebrityNetworkEntry = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newEntry = new Network({
            name: req.body.name,
            relationship: req.body.relationship,
            testimonial: req.body.testimonial,
            image: req.body.image
        });

        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error creating network entry', error: error });
    }
};

// Handle updating a celebrity network entry
exports.updateCelebrityNetworkEntry = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedEntry = await Network.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntry) {
            return res.status(404).json({ message: 'Network entry not found' });
        }
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating network entry', error: error });
    }
};

// Handle deleting a celebrity network entry
exports.deleteCelebrityNetworkEntry = async (req, res) => {
    try {
        const deletedEntry = await Network.findByIdAndRemove(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: 'Network entry not found' });
        }
        res.status(200).json({ message: 'Network entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting network entry', error: error });
    }
};