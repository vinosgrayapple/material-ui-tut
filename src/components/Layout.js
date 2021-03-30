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
  Avatar
} from '@material-ui/core'
import React from 'react'
import { format } from 'date-fns'
import { /* uk, */ ru } from 'date-fns/locale'

import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
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
      marginLeft: drawerWidth,
      
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
	}
})
function Layout({ children }) {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()
	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color="secondary" />,
			path: '/'
		},
		{
			text: 'Create Note',
			icon: <AddCircleOutlineOutlined color="secondary" />,
			path: '/create'
		}
	]
	return (
		<div className={classes.root}>
			{/* app bar  */}
        <AppBar
        className={classes.appbar}
        elevation={0}
        >
          <Toolbar>
            <Typography className={classes.date}>
            Сегодня: {format(new Date(),'do MMMM Y',{locale: ru})}
            </Typography>
            <Typography>
            Vinos
            </Typography>
            <Avatar src="./ava.jpg" className={classes.avatar}/>
          </Toolbar>
        </AppBar>
			{/* side driwer */}
			<Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
				<div>
					<Typography variant="h5" className={classes.title}>
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
      <div className={classes.toolbar}></div>
      {children}
      </div>
		</div>
	)
}

export default Layout
