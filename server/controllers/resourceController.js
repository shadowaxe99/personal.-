const Resource = require('../models/Resource');
const mongoose = require('mongoose');

const getResourceLibrary = async (req, res) => {
    try {
        const resources = await Resource.find({});
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resource library', error });
    }
};

const addResource = async (req, res) => {
    const { title, description, url, category } = req.body;
    if (!title || !description || !url || !category) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newResource = new Resource({
        title,
        description,
        url,
        category
    });

    try {
        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(500).json({ message: 'Error adding new resource', error });
    }
};

const updateResource = async (req, res) => {
    const { id } = req.params;
    const { title, description, url, category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid resource ID' });
    }

    const updatedResource = {
        title,
        description,
        url,
        category,
        _id: id
    };

    try {
        const result = await Resource.findByIdAndUpdate(id, updatedResource, { new: true });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error updating resource', error });
    }
};

const deleteResource = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid resource ID' });
    }

    try {
        await Resource.findByIdAndRemove(id);
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error });
    }
};

module.exports = {
    getResourceLibrary,
    addResource,
    updateResource,
    deleteResource
};