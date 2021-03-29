const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://vinos:19501950Aw@cluster0.eodrz.mongodb.net/notesdb?retryWrites=true&w=majority'
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
console.log('db =>  ...');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
  console.log('DB => connected')
});
module.exports = db