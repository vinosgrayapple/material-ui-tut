import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  Paper,
  Divider,
  InputBase,
  IconButton, Grid,
} from '@material-ui/core'
import {deepOrange} from "@material-ui/core/colors"
import {  AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import React from 'react'
import { format } from 'date-fns'
import { /* uk, */ ru } from 'date-fns/locale'

import { useHistory, useLocation } from 'react-router'
const drawerWidth = 240
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      // height: '100vh',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth

    },
    toolbar: theme.mixins.toolbar,
    date: {
      // flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    },
		input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
	inputbox: {
		border: '1px solid lightgray',
		widthMin: '200px'
	},
	leftSideApp:{
		widthMin: "200px"
	},
	 orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
		fontWeight: 700
  },
  }
})
function Layout ({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
  ]
  return (
    <div className={classes.root}>
      {/* app bar  */}
      <AppBar className={classes.appbar} elevation={0} >
        <Toolbar justifyContent="center" className={classes.root}>
				<Grid
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
          <Typography className={classes.date}>Сегодня: {format(new Date(), 'do MMMM Y', { locale: ru })}</Typography>

          <Paper component="form" elevation={0} className={classes.inputbox}>
						<InputBase
							className={classes.input}
							placeholder="Search Notes"
							inputProps={{ 'aria-label': 'search google maps' }}
						/>
						<IconButton type="submit" className={classes.iconButton} aria-label="search">
							<SearchIcon />
						</IconButton>
    			</Paper >
						<Grid item>
							{/* <Typography>Vinos</Typography> */}
							<Avatar  src='./ava.jpg1' alt="Vinos" className={classes.orange} >V</Avatar>
						</Grid>
					</Grid>
        </Toolbar>
      </AppBar>
      {/* side driwer */}
      <Drawer className={classes.drawer} variant='permanent' anchor='left' classes={{ paper: classes.drawerPaper }}>
        <div>
          <Typography variant='h5' className={classes.title}>
            Vinos
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  )
}

export default Layout
