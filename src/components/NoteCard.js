import React from 'react'
import {Grid, IconButton, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { DeleteOutlined } from '@material-ui/icons'

function NoteCard({ note, deleteNOte }) {
	return (
		<Grid key={note.id} item xs={12} md={3} sm={6}>
			<Card elevation={1}>
				<CardHeader
					action={
						<IconButton onClick={()=>deleteNOte(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography color="textSecondary" variant="body2">{note.detail}</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default NoteCard
