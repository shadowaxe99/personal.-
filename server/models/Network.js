```javascript
const mongoose = require('mongoose');

const networkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A network contact must have a name'],
    trim: true,
  },
  relationship: {
    type: String,
    required: [true, 'Please specify the relationship with Michael'],
  },
  testimonial: {
    type: String,
    required: [true, 'A testimonial is required to add credibility'],
  },
  image: {
    type: String,
    required: [true, 'An image URL is required'],
  },
  socialMediaLinks: {
    type: Map,
    of: String,
    required: [true, 'Social media links are required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the 'updatedAt' field on save
networkSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Network = mongoose.model('Network', networkSchema);

module.exports = Network;
```