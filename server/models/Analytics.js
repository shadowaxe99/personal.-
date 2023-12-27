```javascript
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  pageViews: {
    type: Number,
    required: true,
    default: 0
  },
  uniqueVisitors: {
    type: Number,
    required: true,
    default: 0
  },
  averageSessionDuration: {
    type: Number,
    required: true,
    default: 0
  },
  bounceRate: {
    type: Number,
    required: true,
    default: 0
  },
  trafficSources: {
    direct: { type: Number, default: 0 },
    referral: { type: Number, default: 0 },
    search: { type: Number, default: 0 },
    social: { type: Number, default: 0 },
    other: { type: Number, default: 0 }
  },
  userFeedback: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  conversionMetrics: {
    newsletterSignups: {
      type: Number,
      default: 0
    },
    subscriptionPurchases: {
      type: Number,
      default: 0
    },
    consultationBookings: {
      type: Number,
      default: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
```