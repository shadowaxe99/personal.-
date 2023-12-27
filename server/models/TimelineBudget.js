const mongoose = require('mongoose');

const timelineBudgetSchema = new mongoose.Schema({
  phase: {
    type: String,
    required: true,
    enum: ['Planning', 'Development', 'Testing', 'Launch', 'Maintenance'],
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  budgetAllocated: {
    type: Number,
    required: true
  },
  budgetSpent: {
    type: Number,
    default: 0
  },
  details: {
    type: String,
    required: true,
    trim: true
  },
  milestones: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'In Progress', 'Completed'],
      default: 'Pending'
    },
    comments: {
      type: String,
      trim: true
    }
  }]
}, {
  timestamps: true
});

const TimelineBudget = mongoose.model('TimelineBudget', timelineBudgetSchema);

module.exports = TimelineBudget;