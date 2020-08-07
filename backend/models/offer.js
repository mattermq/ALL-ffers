const mongoose = require('mongoose');

const { Schema } = mongoose;

const offerSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
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
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
