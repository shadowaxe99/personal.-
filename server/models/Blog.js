const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  publishedDate: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  featuredImage: {
    type: String,
    trim: true
  },
  seoTitle: {
    type: String,
    trim: true
  },
  seoDescription: {
    type: String,
    trim: true
  },
  seoKeywords: [{
    type: String,
    trim: true
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;