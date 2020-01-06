import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  timeSlot: {
    height: 100,
    width: 100,
    background: '#aa0000',
    border: '1px solid #fff',
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const Day = day => {
  const classes = useStyles()
  const timeSlots = ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm']

  const handleTimeClick = time => console.log(time)

  return (
    <div className={classes.dayContainer}>
      <Typography>{day}</Typography>
      {timeSlots.map(time => (
        <div className={classes.timeSlot}>
          <Typography>{time}</Typography>
        </div>
      ))}
    </div>
  )
}

const Days = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  return days.map(Day)
}

export default Days
