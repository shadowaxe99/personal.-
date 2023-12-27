```javascript
const mongoose = require('mongoose');

const talentXSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  biography: {
    type: String,
    required: true
  },
  achievements: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }],
  mediaAppearances: [{
    type: {
      type: String,
      enum: ['video', 'podcast', 'article'],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }],
  mentorshipPrograms: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    benefits: [String],
    structure: [String]
  }],
  network: [{
    name: {
      type: String,
      required: true
    },
    relationship: {
      type: String,
      required: true
    },
    testimonial: {
      type: String
    }
  }],
  controversies: [{
    issue: {
      type: String,
      required: true
    },
    response: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }]
}, {
  timestamps: true
});

const TalentX = mongoose.model('TalentX', talentXSchema);

module.exports = TalentX;
```