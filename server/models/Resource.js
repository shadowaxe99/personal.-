```javascript
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
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
  type: {
    type: String,
    required: true,
    enum: ['blog', 'podcast', 'video', 'ebook', 'whitepaper', 'other'],
    trim: true
  },
  url: {
    type: String,
    required: function() { return this.type !== 'ebook' && this.type !== 'whitepaper'; },
    trim: true
  },
  downloadLink: {
    type: String,
    required: function() { return this.type === 'ebook' || this.type === 'whitepaper'; },
    trim: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  tags: [{
    type: String,
    trim: true
  }],
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
```