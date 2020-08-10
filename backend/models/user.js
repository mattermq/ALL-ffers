const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
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
  startedProjects: {
    type: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Project',
      default: []
    },
  },
  finishedProjects: {
    type: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Project',
      default: []
    },
  },
})

module.exports = mongoose.model('User', userSchema);
