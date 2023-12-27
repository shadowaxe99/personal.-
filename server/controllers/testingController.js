const express = require('express');
const router = express.Router();
const Testing = require('../models/Testing');

// @route   GET api/testing
// @desc    Get all testing entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const tests = await Testing.find();
    res.json(tests);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST api/testing
// @desc    Add new testing entry
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newTest = new Testing({
      name: req.body.name,
      status: req.body.status,
      results: req.body.results
    });

    const test = await newTest.save();
    res.json(test);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/testing/:id
// @desc    Update a testing entry
// @access  Public
router.put('/:id', async (req, res) => {
  const { name, status, results } = req.body;
  const testFields = {};
  if (name) testFields.name = name;
  if (status) testFields.status = status;
  if (results) testFields.results = results;

  try {
    let test = await Testing.findById(req.params.id);
    if (!test) return res.status(404).json({ msg: 'Test not found' });

    test = await Testing.findByIdAndUpdate(
      req.params.id,
      { $set: testFields },
      { new: true }
    );

    res.json(test);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/testing/:id
// @desc    Delete a testing entry
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let test = await Testing.findById(req.params.id);
    if (!test) return res.status(404).json({ msg: 'Test not found' });

    await Testing.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Test removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;