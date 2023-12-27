```javascript
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  episodeNumber: {
    type: Number,
    required: true
  },
  guests: [{
    name: String,
    bio: String,
    socialMediaLinks: [String]
  }],
  transcript: {
    type: String
  },
  audioUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  tags: [String],
  relatedEpisodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Podcast'
  }]
}, {
  timestamps: true
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
```