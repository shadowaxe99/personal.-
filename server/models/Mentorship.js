```javascript
const mongoose = require('mongoose');

const mentorshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  benefits: [{
    type: String,
    required: true
  }],
  structure: {
    type: String,
    required: true,
    trim: true
  },
  applicationLink: {
    type: String,
    required: false,
    trim: true
  },
  testimonials: [{
    author: {
      type: String,
      required: true,
      trim: true
    },
    text: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      required: true
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Mentorship = mongoose.model('Mentorship', mentorshipSchema);

module.exports = Mentorship;
```