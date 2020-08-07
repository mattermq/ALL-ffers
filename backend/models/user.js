const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Offer',
    default: []
  },
})

module.exports = mongoose.model('User', userSchema);