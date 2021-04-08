import React from 'react'
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'
import { green, grey, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      switch (note.category) {
        case 'work':
          return yellow[700]
        case 'todos':
          return green[500]
        case 'money':
          return pink[500]
        case 'reminders':
          return pink[500]
        default:
          return grey[500]
      }
    }
  }
})
function NoteCard ({ note, deleteNote }) {
  const classes = useStyles(note)
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
          action={
            <IconButton onClick={() => deleteNote(note._id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography color='textSecondary' variant='body2'>
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
