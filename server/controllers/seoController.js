const SEOModel = require('../models/SEO');
const { validationResult } = require('express-validator');

const getSEOData = async (req, res) => {
  try {
    const seoData = await SEOModel.find({});
    res.json(seoData);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving SEO data', error });
  }
};

const updateSEOData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const seoUpdate = req.body;
    const updatedSEO = await SEOModel.findByIdAndUpdate(id, seoUpdate, { new: true });
    res.json(updatedSEO);
  } catch (error) {
    res.status(500).json({ message: 'Error updating SEO data', error });
  }
};

const createSEOData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newSEOData = new SEOModel(req.body);
    const savedSEOData = await newSEOData.save();
    res.status(201).json(savedSEOData);
  } catch (error) {
    res.status(500).json({ message: 'Error creating SEO data', error });
  }
};

const deleteSEOData = async (req, res) => {
  try {
    const { id } = req.params;
    await SEOModel.findByIdAndDelete(id);
    res.json({ message: 'SEO data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting SEO data', error });
  }
};

module.exports = {
  getSEOData,
  updateSEOData,
  createSEOData,
  deleteSEOData
};