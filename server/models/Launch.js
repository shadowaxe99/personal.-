```javascript
const mongoose = require('mongoose');

const launchSchema = new mongoose.Schema({
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
  launchDate: {
    type: Date,
    required: true
  },
  feedback: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: String,
      required: true,
      trim: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  betaTesters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'completed', 'launched'],
    default: 'planning'
  },
  updates: [{
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
    updateDate: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

const Launch = mongoose.model('Launch', launchSchema);

module.exports = Launch;
```