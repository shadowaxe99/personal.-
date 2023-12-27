const Video = require('../models/Video');
const { validationResult } = require('express-validator');

// Handle fetching all videos
exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle fetching a single video by ID
exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({ msg: 'Video not found' });
        }
        res.json(video);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Video not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle creating a new video
exports.createVideo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newVideo = new Video({
            title: req.body.title,
            url: req.body.url,
            description: req.body.description
        });

        const video = await newVideo.save();
        res.json(video);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Handle updating a video
exports.updateVideo = async (req, res) => {
    const { title, url, description } = req.body;

    // Build video object
    const videoFields = {};
    if (title) videoFields.title = title;
    if (url) videoFields.url = url;
    if (description) videoFields.description = description;

    try {
        let video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({ msg: 'Video not found' });
        }

        video = await Video.findByIdAndUpdate(
            req.params.id,
            { $set: videoFields },
            { new: true }
        );

        res.json(video);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Video not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle deleting a video
exports.deleteVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({ msg: 'Video not found' });
        }

        await video.remove();
        res.json({ msg: 'Video removed' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Video not found' });
        }
        res.status(500).send('Server Error');
    }
};