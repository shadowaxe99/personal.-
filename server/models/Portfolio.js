```javascript
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Entrepreneurship', 'Sports Management', 'Cryptocurrency', 'Digital Media', 'Mentorship', 'Other']
  },
  images: [{
    url: String,
    description: String
  }],
  videos: [{
    url: String,
    description: String
  }],
  documents: [{
    url: String,
    title: String,
    description: String
  }],
  links: [{
    url: String,
    title: String
  }],
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
```