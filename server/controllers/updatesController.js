const Updates = require('../models/Updates');
const { validationResult } = require('express-validator');

// Handle fetching the latest updates
exports.getLatestUpdates = async (req, res) => {
  try {
    const updates = await Updates.find().sort({ createdAt: -1 }).limit(5);
    res.json(updates);
  } catch (error) {
    res.status(500).send('Server Error: Unable to fetch updates.');
  }
};

// Handle creating a new update
exports.createUpdate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, content } = req.body;
    const newUpdate = new Updates({
      title,
      content
    });

    const savedUpdate = await newUpdate.save();
    res.json(savedUpdate);
  } catch (error) {
    res.status(500).send('Server Error: Unable to create update.');
  }
};

// Handle updating an existing update
exports.updateUpdate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content } = req.body;
  const updateFields = { title, content };

  try {
    let update = await Updates.findById(req.params.id);

    if (!update) {
      return res.status(404).json({ msg: 'Update not found' });
    }

    update = await Updates.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    res.json(update);
  } catch (error) {
    res.status(500).send('Server Error: Unable to update the update.');
  }
};

// Handle deleting an update
exports.deleteUpdate = async (req, res) => {
  try {
    const update = await Updates.findById(req.params.id);

    if (!update) {
      return res.status(404).json({ msg: 'Update not found' });
    }

    await update.remove();
    res.json({ msg: 'Update removed' });
  } catch (error) {
    res.status(500).send('Server Error: Unable to delete update.');
  }
};