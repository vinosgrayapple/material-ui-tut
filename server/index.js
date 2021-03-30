const express = require('express')
const cors = require('cors')
const noteRoutes = require('./routes/notes.js')
const mongoose = require('mongoose')

/* ================================================================== */

const Notes = require('./db/models/Notes')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/notes', noteRoutes);


/* ================================================= */


/* ================================================= */
// app.post('/notes', async (req, res) => {
//   console.log('body => ', req.body)
//   try {
//     const posts = await Notes.create(req.body)
//     res.send(posts)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send(Error(error))
//   }
// })
/* ========================================== */
// app.delete('/notes', async (req, res) => {
//   console.log('delete_body => ', req.body)
//   console.log('delete_params => ', req.params)
//   try {
//     await Notes.deleteOne({ _id: req.params.id })
//     res.status(204)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error)
//   }
// })

const DB_URI = 'mongodb+srv://vinos:19501950Aw@cluster0.eodrz.mongodb.net/notesdb?retryWrites=true&w=majority'
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
console.log('db =>  ...')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DB => connected')
  app.listen(3334, () => console.log('listening on port 3334'))
})

// Create database instance and start server
// const adapter = new FileAsync('../data/db.json')
// low(adapter)
//   .then(db => {
//     // Routes
//     // GET /posts/:id
//     app.get('/posts/:id', async (req, res) => {
//       console.log(req.params);
//       const post = Post.find()
//       /* db.get('posts')
//         .find({ id: +req.params.id })
//         .value()
//  */
//       res.send(post)
//     })
//     app.get('/posts', async (req, res) => {
//       const posts = await Post.find() //db.get('posts').values()

//       res.send(posts)
//     })
//     // POST /posts
//     app.post('/posts', (req, res) => {
//       db.get('posts')
//         .push(req.body)
//         .last()
//         .assign({ id: Date.now().toString() })
//         .write()
//         .then(post => res.send(post))
//     })

//     // Set db default values
//     // return db.defaults({ posts: require('./db.json')}).write()
//   })
//   .then(() => {
//   })
