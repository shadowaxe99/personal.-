const Subscription = require('../models/Subscription');
const { validationResult } = require('express-validator');

// Handle subscription creation on POST
exports.createSubscription = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new subscription instance
    const { email, plan } = req.body;
    let subscription = new Subscription({
      email,
      plan,
      startDate: new Date(),
    });

    // Save the subscription to the database
    subscription = await subscription.save();
    res.status(201).json({
      message: 'Subscription created successfully',
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Handle fetching all subscriptions on GET
exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Handle fetching a single subscription on GET
exports.getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Handle subscription update on PUT
exports.updateSubscription = async (req, res) => {
  try {
    const { email, plan } = req.body;
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      { email, plan },
      { new: true }
    );
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json({
      message: 'Subscription updated successfully',
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Handle subscription deletion on DELETE
exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndRemove(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};