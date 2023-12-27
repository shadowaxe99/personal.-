const Podcast = require('../models/Podcast');
const { validationResult } = require('express-validator');

// Handle fetching all podcasts
exports.getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find({});
        res.json(podcasts);
    } catch (error) {
        res.status(500).send('Server Error: Unable to retrieve podcasts.');
    }
};

// Handle fetching a single podcast by ID
exports.getPodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        res.json(podcast);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        res.status(500).send('Server Error: Unable to retrieve podcast.');
    }
};

// Handle creating a new podcast
exports.createPodcast = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, url, releaseDate } = req.body;

    try {
        const newPodcast = new Podcast({
            title,
            description,
            url,
            releaseDate
        });

        const podcast = await newPodcast.save();
        res.json(podcast);
    } catch (error) {
        res.status(500).send('Server Error: Unable to create podcast.');
    }
};

// Handle updating an existing podcast
exports.updatePodcast = async (req, res) => {
    const { title, description, url, releaseDate } = req.body;

    // Build podcast object
    const podcastFields = {};
    if (title) podcastFields.title = title;
    if (description) podcastFields.description = description;
    if (url) podcastFields.url = url;
    if (releaseDate) podcastFields.releaseDate = releaseDate;

    try {
        let podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }

        podcast = await Podcast.findByIdAndUpdate(
            req.params.id,
            { $set: podcastFields },
            { new: true }
        );

        res.json(podcast);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        res.status(500).send('Server Error: Unable to update podcast.');
    }
};

// Handle deleting a podcast
exports.deletePodcast = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }

        await podcast.remove();
        res.json({ msg: 'Podcast removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        res.status(500).send('Server Error: Unable to delete podcast.');
    }
};