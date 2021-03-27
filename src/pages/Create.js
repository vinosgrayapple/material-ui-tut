import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Radio,
	TextField,
	makeStyles,
	Container,
	Typography,
	Button
} from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
// import classes from '*.module.css'
const useStyle = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block'
	},
	radio: {
		display: 'block',
    marginBottom: 20
	},
  
})
export default function Create() {
	const classes = useStyle()
	const [ title, setTitle ] = useState('')
	const [ detail, setDetail ] = useState('')
	const [ titleErr, setTitleErr ] = useState(false)
	const [ detailErr, setDetailErr ] = useState(false)
  const [category, setCategory] = useState('')
  const history = useHistory()
	const handleTitle = (e) => {
		setTitle(e.target.value)
	}
	const handleDetail = (e) => {
		setDetail(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setDetailErr(false)
		setTitleErr(false)
		if (!title.trim()) {
			setTitleErr(true)
		}
		if (!detail.trim()) {
			setDetailErr(true)
		}
		fetch(
      'http://localhost:3333/notes',
      {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'},
       body: JSON.stringify({ title, detail, category })
      })
      .then(()=>history.push('/'))
      // .then(response => response.json())
      // .then(re => console.log(re))
    
	}
	return (
		<Container>
			<Typography variant="h5" color="textSecondary" component="h2" gutterBottom>
				Create a new Note
			</Typography>
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					className={classes.field}
					label="Note title"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					value={title}
					onChange={handleTitle}
					error={titleErr}
				/>
				<TextField
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					multiline
					rows={4}
					required
					value={detail}
					error={detailErr}
					onChange={handleDetail}
				/>
        <FormControl component="fieldset" className={classes.radio}>
        <FormLabel>Check Category</FormLabel>
				<RadioGroup value={category} onChange={e=>{setCategory(e.target.value)}}>
					<FormControlLabel value="money" control={<Radio />} label="Money" />
					<FormControlLabel value="todos" control={<Radio />} label="Todos" />
					<FormControlLabel value="work" control={<Radio />} label="Work" />
					<FormControlLabel value="remindrs" control={<Radio />} label="Remindrs" />
				</RadioGroup>
        </FormControl>
				<Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRight />}>
					Submit
				</Button>
			</form>
		</Container>
	)
}
