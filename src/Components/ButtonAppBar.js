import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    color: '#fff',
    marginRight: '20px',
  },
  nav: {
    background: '#333',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Barber Shop
          </Typography>
          <Tooltip title="Home">
            <Link className={classes.links} to="/">
              <HomeIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Appointments">
            <Link className={classes.links} to="/appointment-list">
              <EventNoteIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Account">
            <Link className={classes.links} to="/login">
              <AccountCircleIcon />
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}
