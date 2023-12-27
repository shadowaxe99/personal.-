```javascript
const mongoose = require('mongoose');

const ventureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A venture must have a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'A venture must have a description']
  },
  industry: {
    type: String,
    required: [true, 'Please specify the industry'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Please specify your role in the venture'],
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, 'The start date of the venture is required']
  },
  endDate: {
    type: Date
  },
  achievements: [{
    type: String,
    trim: true
  }],
  imageUrl: {
    type: String,
    trim: true
  },
  links: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

const Venture = mongoose.model('Venture', ventureSchema);

module.exports = Venture;
```