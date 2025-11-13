const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true,
    enum: ['overflowing_drain', 'garbage_pile', 'stagnant_water', 'blocked_sewer', 'open_defecation', 'other']
  },
  location: {
    address: {
      type: String,
      required: false
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      }
    }
  },
  images: [{
    type: String // URL/path to uploaded images
  }],
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'resolved', 'rejected'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportedBy: {
    name: {
      type: String,
      required: false
    },
    contact: {
      type: String,
      required: false
    }
  },
  assignedTo: {
    type: String,
    default: null
  },
  resolvedDate: {
    type: Date,
    default: null
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Index for geospatial queries
reportSchema.index({ 'location.coordinates': '2dsphere' });

module.exports = mongoose.model('Report', reportSchema);
