import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import useFirebaseAuth from '../config/useFirebaseAuth'
import useGetFirestoreCollection from '../config/useGetFirestoreCollection'
import firebase from '../config/firebase'

const useStyles = makeStyles(theme => ({
  top: {
    marginTop: theme.spacing(3),
  },
  paper: { padding: theme.spacing(5) },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const AppointmentList = () => {
  const classes = useStyles()

  const [appointments, error, isLoading] = useGetFirestoreCollection(
    'appointments'
  )

  // const { user, login, logout } = useFirebaseAuth()
  // console.log({ user })
  // login('test@test.com', 'testpassword')
  // console.log({ user })

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  })

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  console.log({ appointments })

  return (
    <Container align="center" className={classes.top}>
      <Paper className={classes.paper}>
        <Typography variant="h3">Appointments</Typography>
        <Container align="left">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Sort by</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange('age')}
              inputProps={{
                name: 'age',
                id: 'age-native-simple',
              }}>
              <option value="" />
              <option value={0}>All available days</option>
              <option value={10}>Monday</option>
              <option value={20}>Tuesday</option>
              <option value={30}>Wednesday</option>
              <option value={40}>Thursday</option>
              <option value={50}>Friday</option>
              <option value={60}>Saturday</option>
            </Select>
          </FormControl>
        </Container>
        <Container align="center">
          {isLoading ? (
            <Typography variant="h6">loading data..</Typography>
          ) : (
            appointments &&
            appointments.map(appointment => (
              <div key={appointment.id}>
                <Typography variant="h6">{appointment.name}</Typography>
              </div>
            ))
          )}
        </Container>
        <Container align="center">
          {error && <Typography variant="h6">{error.message}</Typography>}
        </Container>
      </Paper>
    </Container>
  )
}

export default AppointmentList
