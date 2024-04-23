const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  time: String,
});

module.exports = mongoose.model('Message', messageSchema);
