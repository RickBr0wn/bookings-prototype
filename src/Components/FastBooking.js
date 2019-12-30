import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  space: { marginTop: theme.spacing(8), maxWidth: '80%' },
  padding: { padding: theme.spacing(5) },
  button: { marginLeft: theme.spacing(2) },
  text: { marginBottom: theme.spacing(4) },
}))

const FastBooking = () => {
  const classes = useStyles()
  return (
    <Container className={classes.space}>
      <Paper align="center" className={classes.padding}>
        <Typography className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button className={classes.button} variant="outlined" color="secondary">
          Book an appointment now!
        </Button>
      </Paper>
    </Container>
  )
}

export default FastBooking
