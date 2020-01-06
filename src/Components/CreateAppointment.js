import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ListOfDays from './ListOfDays'
import AppointmentEntry from './AppointmentEntry'

const useStyles = makeStyles(theme => ({
  top: {
    marginTop: theme.spacing(12),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

const CreateAppointment = () => {
  const classes = useStyles()
  return (
    <Container className={classes.top}>
      <Paper className={classes.paper}>
        <Typography variant="h3">Book Now!</Typography>
        <ListOfDays />
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h4">form</Typography>
        <AppointmentEntry />
      </Paper>
    </Container>
  )
}

export default CreateAppointment
