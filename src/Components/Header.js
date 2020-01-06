import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../images/barbershop.png'
import Logo from '../images/barberLogo.png'
import FastBooking from './FastBooking'
import useGeoLocation from '../config/useLocationData'

const useStyles = makeStyles(theme => ({
  image: {
    position: 'absolute',
    maxWidth: '100%',
  },
  top: {
    marginTop: theme.spacing(12),
  },
  paperContainer: {
    background: '#000',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    position: 'absolute',
    top: '520px',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    height: '200px',
    width: '200px',
    borderRadius: '100%',
    border: `${theme.palette.secondary.main} 3px solid`,
  },
}))

const Header = () => {
  const classes = useStyles()
  const [latitude, longitude] = useGeoLocation()
  return (
    <Container className={classes.top}>
      <Paper className={classes.paperContainer}>
        <Typography align="center" variant="h2">
          The Barber Shop
        </Typography>
        <Typography variant="h5">A cut above the rest.</Typography>
        <img className={classes.logo} src={Logo} alt="logo" />
      </Paper>
      <FastBooking />
    </Container>
  )
}

export default Header
