```javascript
const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  pageTitle: {
    type: String,
    required: true,
    trim: true
  },
  metaDescription: {
    type: String,
    required: true,
    trim: true
  },
  metaKeywords: [String],
  canonicalUrl: {
    type: String,
    trim: true
  },
  ogTitle: {
    type: String,
    trim: true
  },
  ogDescription: {
    type: String,
    trim: true
  },
  ogImage: {
    type: String,
    trim: true
  },
  twitterTitle: {
    type: String,
    trim: true
  },
  twitterDescription: {
    type: String,
    trim: true
  },
  twitterImage: {
    type: String,
    trim: true
  },
  structuredData: {
    type: String,
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

seoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const SEO = mongoose.model('SEO', seoSchema);

module.exports = SEO;
```