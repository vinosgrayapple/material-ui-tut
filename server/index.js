const express = require('express')
const cors = require('cors')
const noteRoutes = require('./routes/notes.js')
const mongoose = require('mongoose')

/* ================================================================== */

const app = express()
app.use(express.json())
app.use(cors())
app.use('/notes', noteRoutes);

const DB_URI = 'mongodb+srv://vinos:19501950Aw@cluster0.eodrz.mongodb.net/notesdb?retryWrites=true&w=majority'
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
console.log('db =>  ...')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DB => connected')
  app.listen(3334, () => console.log('listening on port 3334'))
})