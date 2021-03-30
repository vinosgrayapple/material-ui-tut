import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import NoData from '../components/NoData'
const useStyle = makeStyles({
  grid: { marginTop: 5 }

})
export default function Notes () {
  const classes = useStyle()
  const [notes, setNotes] = useState(null)
  // const [deleted, setDeleted] = useState(null)
  useEffect(async () => {
    try {
      const responce = await	fetch('http://localhost:3334/notes')
      const notes = await responce.json()
      setNotes(notes)
    } catch (err) {
      console.log(err)
    }
  }, [])
  const deleteNote = async (id) => {
    try {
      const responce = await fetch('http://localhost:3334/notes/' + id, { method: 'DELETE' })
      console.log(await responce.json())
      // fetch(`http://localhost:3334/notes/${id}`,
      //   {
      //     method: 'DELETE',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ id })
      //   })

      const newNotes = notes.filter(note => note._id !== id)
      console.log('newNotes ===>>> ', newNotes)
      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className={classes.grid}>
      <Grid container spacing={1}>
        {
          notes ? notes.map((note) =>
            <NoteCard deleteNote={deleteNote} key={note._id} note={note} />)
            : <NoData />
        }
      </Grid>
    </Container>
  )
}
