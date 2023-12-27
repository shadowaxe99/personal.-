```javascript
const mongoose = require('mongoose');

const testingSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
    trim: true
  },
  testDescription: {
    type: String,
    required: true,
    trim: true
  },
  testType: {
    type: String,
    required: true,
    enum: ['Unit', 'Integration', 'User Acceptance'],
    default: 'Unit'
  },
  testStatus: {
    type: String,
    required: true,
    enum: ['Pending', 'In Progress', 'Completed', 'Failed'],
    default: 'Pending'
  },
  testResults: {
    type: String,
    required: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to update the lastUpdated field automatically
testingSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

const Testing = mongoose.model('Testing', testingSchema);

module.exports = Testing;
```