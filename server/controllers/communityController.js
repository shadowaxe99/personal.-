const Community = require('../models/Community');
const { validationResult } = require('express-validator');

const getCommunityDiscussions = async (req, res) => {
    try {
        const discussions = await Community.find({});
        res.json(discussions);
    } catch (error) {
        res.status(500).send('Server Error: Unable to retrieve community discussions.');
    }
};

const createDiscussion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, content, author } = req.body;
        const newDiscussion = new Community({
            title,
            content,
            author
        });

        const discussion = await newDiscussion.save();
        res.json(discussion);
    } catch (error) {
        res.status(500).send('Server Error: Unable to create discussion.');
    }
};

const updateDiscussion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, content } = req.body;
        const discussion = await Community.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!discussion) {
            return res.status(404).json({ msg: 'Discussion not found' });
        }
        res.json(discussion);
    } catch (error) {
        res.status(500).send('Server Error: Unable to update discussion.');
    }
};

const deleteDiscussion = async (req, res) => {
    try {
        const discussion = await Community.findById(req.params.id);
        if (!discussion) {
            return res.status(404).json({ msg: 'Discussion not found' });
        }

        await discussion.remove();
        res.json({ msg: 'Discussion removed' });
    } catch (error) {
        res.status(500).send('Server Error: Unable to delete discussion.');
    }
};

module.exports = {
    getCommunityDiscussions,
    createDiscussion,
    updateDiscussion,
    deleteDiscussion
};