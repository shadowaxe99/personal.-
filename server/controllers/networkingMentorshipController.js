```javascript
const NetworkingMentorship = require('../models/NetworkingMentorship');

// Get networking and mentorship information
exports.getNetworkingMentorship = async (req, res) => {
  try {
    const networkingMentorshipData = await NetworkingMentorship.find();
    res.status(200).json(networkingMentorshipData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving networking and mentorship data", error });
  }
};

// Create new networking and mentorship entry
exports.createNetworkingMentorship = async (req, res) => {
  try {
    const newNetworkingMentorship = new NetworkingMentorship(req.body);
    const savedNetworkingMentorship = await newNetworkingMentorship.save();
    res.status(201).json(savedNetworkingMentorship);
  } catch (error) {
    res.status(500).json({ message: "Error creating new networking and mentorship entry", error });
  }
};

// Update networking and mentorship information
exports.updateNetworkingMentorship = async (req, res) => {
  try {
    const updatedNetworkingMentorship = await NetworkingMentorship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNetworkingMentorship);
  } catch (error) {
    res.status(500).json({ message: "Error updating networking and mentorship information", error });
  }
};

// Delete networking and mentorship entry
exports.deleteNetworkingMentorship = async (req, res) => {
  try {
    await NetworkingMentorship.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Networking and mentorship entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting networking and mentorship entry", error });
  }
};
```