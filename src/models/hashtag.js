const mongoose = require('mongoose');
const hashtagSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
    unique: true,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});
const Hashtag = mongoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;
