const mongoose = require('mongoose');

const awarenessSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['hygiene', 'waste_disposal', 'disease_prevention', 'water_hygiene', 'general']
  },
  type: {
    type: String,
    required: true,
    enum: ['article', 'video', 'infographic', 'tip']
  },
  mediaUrl: {
    type: String // URL for videos or infographics
  },
  thumbnail: {
    type: String
  },
  tags: [{
    type: String
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Awareness', awarenessSchema);
