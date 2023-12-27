const express = require('express');
const router = express.Router();
const EmailMarketing = require('../models/EmailMarketing');

// @route   POST /email-marketing/subscribe
// @desc    Subscribe a user to the email marketing list
// @access  Public
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if the email already exists
    let subscriber = await EmailMarketing.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create a new subscriber
    subscriber = new EmailMarketing({ email });
    await subscriber.save();

    res.status(201).json({ message: 'Subscription successful', subscriber });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /email-marketing/subscribers
// @desc    Get all subscribers
// @access  Private/Admin
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await EmailMarketing.find();
    res.json(subscribers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /email-marketing/unsubscribe/:id
// @desc    Unsubscribe a user from the email marketing list
// @access  Public
router.delete('/unsubscribe/:id', async (req, res) => {
  try {
    const subscriber = await EmailMarketing.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }

    await subscriber.remove();
    res.json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;