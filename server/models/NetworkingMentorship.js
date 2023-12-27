const mongoose = require('mongoose');

const networkingMentorshipSchema = new mongoose.Schema({
  celebrityNetwork: [{
    name: String,
    testimonial: String,
    relationship: String,
    image: String
  }],
  mentorshipPrograms: [{
    title: String,
    description: String,
    benefits: [String],
    structure: {
      duration: String,
      sessions: Number,
      topics: [String]
    },
    image: String
  }],
  communityEngagement: {
    forums: [{
      title: String,
      description: String,
      moderators: [String],
      rules: String
    }],
    events: [{
      name: String,
      date: Date,
      description: String,
      attendees: Number,
      image: String
    }]
  }
}, { timestamps: true });

const NetworkingMentorship = mongoose.model('NetworkingMentorship', networkingMentorshipSchema);

module.exports = NetworkingMentorship;