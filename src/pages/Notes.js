import React, { useEffect, useState } from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import NoData from '../components/NoData'
export default function Notes() {
	const [ notes, setNotes ] = useState(null)
	useEffect(() => {
		fetch('http://localhost:3333/notes')
			.then((response) => response.json())
			.then((notes) => {
				setNotes(notes)
			})
			.catch((err) => console.log(err))
	}, [])
  const deleteNOte = async id => {
    await fetch(`http://localhost:3333/notes/${id}`,{method:'DELETE'})
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
	return (
		<Container>
			<Grid container spacing={2}>
        {notes ? notes.map((note) => 
                  <NoteCard  deleteNOte={deleteNOte}key={note.id} note={note} />) 
                : <NoData />}
      </Grid>
		</Container>
	)
}
