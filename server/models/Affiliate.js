```javascript
const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
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
  url: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to set the updatedAt field to the current date/time before saving
affiliateSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Affiliate = mongoose.model('Affiliate', affiliateSchema);

module.exports = Affiliate;
```