const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A media title is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Media type is required (e.g., video, podcast, article)'],
    enum: ['video', 'podcast', 'article'],
  },
  description: {
    type: String,
    required: [true, 'A description of the media is required'],
  },
  url: {
    type: String,
    required: [true, 'A URL to the media content is required'],
    trim: true,
  },
  datePublished: {
    type: Date,
    required: [true, 'The publication date of the media is required'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  thumbnail: {
    type: String,
    required: function() { return this.type === 'video' || this.type === 'podcast'; },
  },
  // Additional fields can be added as needed to support other media features
});

// Indexes can be added to improve search performance
mediaSchema.index({ title: 'text', description: 'text' });

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;