const mongoose = require('mongoose');

const { Schema } = mongoose;

const offerSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  haveProjectBudget: {
    type: Boolean,
  },
  haveHourlyRate: {
    type: Boolean,
  },
  budget: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  tags: {
    type: Array,
  },
  url: {
    type: String,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
