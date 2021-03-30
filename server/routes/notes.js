const express = require('express')

const { getAllNotes, createNote, deleteNote } = require('../controllers/notes')

const router = express.Router()

router.get('/', getAllNotes)
router.post('/', createNote)
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
router.delete('/:id', deleteNote)
// router.patch('/:id/likePost', likePost);

module.exports = router
