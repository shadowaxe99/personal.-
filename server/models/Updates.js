```javascript
const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
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
  category: {
    type: String,
    required: true,
    enum: ['Biography', 'Portfolio', 'Media', 'Network', 'Mentorship', 'Community', 'Subscription', 'Affiliate', 'Consultation', 'Blog', 'Podcast', 'Video', 'Resource', 'SocialMedia', 'SEO', 'EmailMarketing', 'Analytics', 'Compliance', 'Testing', 'Launch', 'Entrepreneurship', 'Ventures', 'TalentX', 'NetworkingMentorship', 'Controversies'],
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isMajor: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Update = mongoose.model('Update', updateSchema);

module.exports = Update;
```