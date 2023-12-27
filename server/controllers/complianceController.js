const express = require('express');
const router = express.Router();
const Compliance = require('../models/Compliance');

// Middleware to check for GDPR compliance
const checkGDPRCompliance = (req, res, next) => {
  // This function should implement the logic to check if the application is GDPR compliant
  // For example, checking if user data is being handled according to GDPR standards
  // This is a placeholder function and should be replaced with actual GDPR compliance checks
  const isCompliant = true; // Placeholder value

  if (!isCompliant) {
    return res.status(403).json({ message: 'The application is not GDPR compliant.' });
  }
  next();
};

// GET compliance information
router.get('/', checkGDPRCompliance, async (req, res) => {
  try {
    const complianceInfo = await Compliance.find();
    res.json(complianceInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST update compliance information
router.post('/', checkGDPRCompliance, async (req, res) => {
  const { gdpr, dataProtection, securityMeasures } = req.body;
  const newCompliance = new Compliance({
    gdpr,
    dataProtection,
    securityMeasures
  });

  try {
    const savedCompliance = await newCompliance.save();
    res.status(201).json(savedCompliance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Middleware to handle errors
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;