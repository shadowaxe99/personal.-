```javascript
const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    enum: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
  },
  handle: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  followers: {
    type: Number,
    default: 0,
  },
  posts: [{
    content: String,
    postDate: Date,
    likes: Number,
    comments: Number,
    shares: Number,
  }],
  lastUpdated: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true
});

// Virtual for getting the total engagement of all posts
socialMediaSchema.virtual('totalEngagement').get(function() {
  return this.posts.reduce((total, post) => {
    return total + (post.likes || 0) + (post.comments || 0) + (post.shares || 0);
  }, 0);
});

// Static method to find social media by handle
socialMediaSchema.statics.findByHandle = function(handle, callback) {
  return this.find({ handle: new RegExp(handle, 'i') }, callback);
};

// Instance method to add a new post
socialMediaSchema.methods.addPost = function(post) {
  this.posts.push(post);
  return this.save();
};

const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema);

module.exports = SocialMedia;
```