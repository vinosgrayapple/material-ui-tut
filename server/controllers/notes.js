
const Notes = require('../db/models/Notes')
const mongoose = require('mongoose')

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false)

const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Notes.find()
    res.status(200).json(allNotes)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
const createNote = async (req, res) => {
  const { title, detail, category } = req.body
  try {
    const newPostNotes = await Notes.create({ title, detail, category })
    res.status(201).json(newPostNotes)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
const deleteNote = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Notes.findByIdAndRemove(id)

  res.json({ message: 'Note deleted successfully.' })
}

module.exports = {
  getAllNotes,
  createNote,
  deleteNote
}
