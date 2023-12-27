const Affiliate = require('../models/Affiliate');
const { validationResult } = require('express-validator');

// Handle affiliate link creation
exports.createAffiliateLink = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, url, description } = req.body;
    const newAffiliateLink = new Affiliate({
      name,
      url,
      description
    });

    const savedAffiliateLink = await newAffiliateLink.save();
    res.status(201).json(savedAffiliateLink);
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating affiliate link', error: error.message });
  }
};

// Handle fetching all affiliate links
exports.getAllAffiliateLinks = async (req, res) => {
  try {
    const affiliateLinks = await Affiliate.find();
    res.status(200).json(affiliateLinks);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching affiliate links', error: error.message });
  }
};

// Handle fetching a single affiliate link
exports.getAffiliateLink = async (req, res) => {
  try {
    const affiliateLink = await Affiliate.findById(req.params.id);
    if (!affiliateLink) {
      return res.status(404).json({ message: 'Affiliate link not found' });
    }
    res.status(200).json(affiliateLink);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching affiliate link', error: error.message });
  }
};

// Handle updating an affiliate link
exports.updateAffiliateLink = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, url, description } = req.body;
    const affiliateLink = await Affiliate.findByIdAndUpdate(
      req.params.id,
      { name, url, description },
      { new: true }
    );

    if (!affiliateLink) {
      return res.status(404).json({ message: 'Affiliate link not found' });
    }

    res.status(200).json(affiliateLink);
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating affiliate link', error: error.message });
  }
};

// Handle deleting an affiliate link
exports.deleteAffiliateLink = async (req, res) => {
  try {
    const affiliateLink = await Affiliate.findByIdAndRemove(req.params.id);
    if (!affiliateLink) {
      return res.status(404).json({ message: 'Affiliate link not found' });
    }
    res.status(200).json({ message: 'Affiliate link deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while deleting affiliate link', error: error.message });
  }
};