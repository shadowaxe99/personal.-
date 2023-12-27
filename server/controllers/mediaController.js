const Media = require('../models/Media');
const { validationResult } = require('express-validator');

const getMediaAppearances = async (req, res) => {
    try {
        const mediaAppearances = await Media.find({});
        res.json(mediaAppearances);
    } catch (error) {
        res.status(500).send('Server Error: Unable to retrieve media appearances.');
    }
};

const addMediaAppearance = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, type, url, date } = req.body;
        const newMediaAppearance = new Media({
            title,
            description,
            type,
            url,
            date
        });

        const savedMediaAppearance = await newMediaAppearance.save();
        res.json(savedMediaAppearance);
    } catch (error) {
        res.status(500).send('Server Error: Unable to add media appearance.');
    }
};

const updateMediaAppearance = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { title, description, type, url, date } = req.body;

        let mediaAppearance = await Media.findById(id);
        if (!mediaAppearance) {
            return res.status(404).json({ msg: 'Media appearance not found' });
        }

        mediaAppearance.title = title;
        mediaAppearance.description = description;
        mediaAppearance.type = type;
        mediaAppearance.url = url;
        mediaAppearance.date = date;

        await mediaAppearance.save();
        res.json(mediaAppearance);
    } catch (error) {
        res.status(500).send('Server Error: Unable to update media appearance.');
    }
};

const deleteMediaAppearance = async (req, res) => {
    try {
        const { id } = req.params;
        const mediaAppearance = await Media.findById(id);
        if (!mediaAppearance) {
            return res.status(404).json({ msg: 'Media appearance not found' });
        }

        await mediaAppearance.remove();
        res.json({ msg: 'Media appearance removed' });
    } catch (error) {
        res.status(500).send('Server Error: Unable to delete media appearance.');
    }
};

module.exports = {
    getMediaAppearances,
    addMediaAppearance,
    updateMediaAppearance,
    deleteMediaAppearance
};