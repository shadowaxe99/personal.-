const Launch = require('../models/Launch');
const { validationResult } = require('express-validator');

// Handle the official website launch event
exports.launchWebsite = async (req, res) => {
  try {
    // Validate request parameters, queries using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new launch event in the database
    const launchData = {
      launchedBy: req.body.launchedBy,
      launchDate: new Date(),
      version: req.body.version,
      notes: req.body.notes
    };

    const newLaunch = new Launch(launchData);
    await newLaunch.save();

    // Respond with the launch event data
    res.status(201).json({
      message: 'Website successfully launched!',
      launch: newLaunch
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error during the launch event.',
      error: error.message
    });
  }
};

// Retrieve information about the latest launch event
exports.getLatestLaunch = async (req, res) => {
  try {
    const latestLaunch = await Launch.findOne().sort({ launchDate: -1 });
    if (!latestLaunch) {
      return res.status(404).json({ message: 'No launch data found.' });
    }

    res.status(200).json({
      message: 'Latest launch data retrieved successfully.',
      launch: latestLaunch
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving latest launch data.',
      error: error.message
    });
  }
};

// Update launch event details
exports.updateLaunch = async (req, res) => {
  try {
    const { launchId } = req.params;
    const launchUpdateData = req.body;

    const updatedLaunch = await Launch.findByIdAndUpdate(
      launchId,
      launchUpdateData,
      { new: true }
    );

    if (!updatedLaunch) {
      return res.status(404).json({ message: 'Launch event not found.' });
    }

    res.status(200).json({
      message: 'Launch event updated successfully.',
      launch: updatedLaunch
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating launch event.',
      error: error.message
    });
  }
};

// Delete a launch event
exports.deleteLaunch = async (req, res) => {
  try {
    const { launchId } = req.params;
    const launch = await Launch.findByIdAndRemove(launchId);

    if (!launch) {
      return res.status(404).json({ message: 'Launch event not found to delete.' });
    }

    res.status(200).json({ message: 'Launch event deleted successfully.' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting launch event.',
      error: error.message
    });
  }
};