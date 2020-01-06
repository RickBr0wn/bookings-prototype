import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '@material-ui/core/Container'
import Select from '@material-ui/core/Select'
import DateFnsUtils from '@date-io/date-fns'
import Days from './Days'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
}))

const AppointmentEntry = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()))
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const handleTimeChange = event => {
    setAge(event.target.value)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container className={classes.container}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleTimeChange}>
          <MenuItem value={10}>9am</MenuItem>
          <MenuItem value={20}>10am</MenuItem>
          <MenuItem value={30}>11am</MenuItem>
          <MenuItem value={40}>12pm</MenuItem>
          <MenuItem value={50}>1pm</MenuItem>
          <MenuItem value={60}>2pm</MenuItem>
          <MenuItem value={70}>3pm</MenuItem>
          <MenuItem value={80}>4pm</MenuItem>
        </Select>
        <Days />
      </Container>
    </MuiPickersUtilsProvider>
  )
}

export default AppointmentEntry
