const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/SocialMedia');

// GET social media feeds
router.get('/feeds', async (req, res) => {
    try {
        const feeds = await SocialMedia.find({});
        res.json(feeds);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching social media feeds', error });
    }
});

// POST a new social media feed entry
router.post('/feeds', async (req, res) => {
    try {
        const newFeed = new SocialMedia(req.body);
        const savedFeed = await newFeed.save();
        res.status(201).json(savedFeed);
    } catch (error) {
        res.status(500).json({ message: 'Error saving social media feed', error });
    }
});

// PUT to update a social media feed entry
router.put('/feeds/:id', async (req, res) => {
    try {
        const updatedFeed = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFeed);
    } catch (error) {
        res.status(500).json({ message: 'Error updating social media feed', error });
    }
});

// DELETE a social media feed entry
router.delete('/feeds/:id', async (req, res) => {
    try {
        const deletedFeed = await SocialMedia.findByIdAndDelete(req.params.id);
        res.json(deletedFeed);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting social media feed', error });
    }
});

module.exports = router;