const mongoose = require('mongoose');

// https://www.guru99.com/mongodb-objectid.html
const PostSchema = mongoose.Schema({
  discordId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('queue', PostSchema); // WARNING: mongodb pluralizes their schema and lower cased
