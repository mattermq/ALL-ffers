const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  offerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  hasProjectBudget: {
    type: Boolean,
  },
  hasHourlyRate: {
    type: Boolean,
  },
  budget: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  publishedAtTS: {
    type: String,
  },
  tags: {
    type: Array,
  },
  url: {
    type: String,
  },
  from: {
    type: String,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: String,
    default: ''
  },
  startedAt: {
    type: Date,
    default: new Date()
  },
  finishedAt: {
    type: Date,
    default: undefined
  },
  finishedAtTS: {
    type: Date,
    default: undefined
  }
});

module.exports = mongoose.model('Project', projectSchema);
