const  mongoose = require('mongoose')
const Notes = new mongoose.Schema({
  title: String,
  detail: String,
  category: String
});

module.exports = mongoose.model('Notes', Notes);

