import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/NoteCard'
// import NoData from '../components/NoData'

export default function Notes() {
	const [ notes, setNotes ] = useState([])
	useEffect(async () => {
		try {
			const responce = await fetch('http://localhost:3334/notes')
			const notes = await responce.json()
			setNotes(notes)
		} catch (err) {
			console.log(err)
		}
	}, [])
	const deleteNote = async (id) => {
		try {
			await fetch('http://localhost:3334/notes/' + id, { method: 'DELETE' })
			const newNotes = notes.filter((note) => note._id !== id)
			setNotes(newNotes)
		} catch (error) {
			throw Error(error.message)
		}
	}
	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1
	}

	return (
		<Container>
			<Masonry 
      breakpointCols={breakpoints} 
      className="my-masonry-grid" 
      columnClassName="my-masonry-grid_column">
				{notes.map((note) => (
					<div key={note.id}>
						<NoteCard note={note} handleDelete={deleteNote} />
					</div>
				))}
			</Masonry>
		</Container>
	)
}
