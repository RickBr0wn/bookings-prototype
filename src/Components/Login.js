import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useFirebaseAuth from '../config/useFirebaseAuth'

const useStyles = makeStyles(theme => ({
  top: {
    marginTop: theme.spacing(12),
  },
  paper: {
    maxWidth: '450px',
    padding: '40px 0',
  },
  input: {
    marginTop: '20px',
  },
  button: { margin: '40px 0 20px 0' },
}))

const Login = props => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = React.useState()
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = React.useState()
  const classes = useStyles()
  const { user, error, login, logout } = useFirebaseAuth()

  return (
    <Container align="center" className={classes.top}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Please Log In</Typography>
        <FormControl>
          <TextField
            className={classes.input}
            id="email-input"
            label="Enter your email address"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            className={classes.input}
            id="password-input"
            label="Enter your password"
            type="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => login(email, 'testPassword')}
            className={classes.button}
            variant="contained">
            Log in
          </Button>
          <Button
            type="submit"
            onClick={() => logout()}
            className={classes.button}
            variant="contained">
            Log Out
          </Button>
        </FormControl>
        <Typography>{user ? user.id : 'false'}</Typography>
        {error && <Typography color="secondary">{error.message}</Typography>}
      </Paper>
    </Container>
  )
}

export default Login
