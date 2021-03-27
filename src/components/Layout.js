import { List,ListItem,ListItemIcon, ListItemText,makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Drawer} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
const drawerWidth = 240
const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: '100vh'
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
})
function Layout({children}) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary"/> ,
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];
  return (
  <div className={classes.root}>
  {/* app bar  */}

  {/* side driwer */}
    <Drawer
    className={classes.drawer}
    variant="permanent"
    anchor="left"
    classes={{paper: classes.drawerPaper}}
    >
      <div>
        <Typography variant="h5">
          Vinos
        </Typography>
      </div>
      <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
    </Drawer>
    <div className={classes.page}>
      {children}
    </div>
  </div>
  )
}

export default Layout
