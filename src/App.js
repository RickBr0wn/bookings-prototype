import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Header from './Components/Header'
import Login from './Components/Login'
import ButtonAppBar from './Components/ButtonAppBar'
import AppointmentList from './Components/AppointmentList'
import CreateAppointment from './Components/CreateAppointment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UseFirebaseAuthProvider } from './config/useFirebaseAuth'
import firebase from './config/firebase'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <UseFirebaseAuthProvider firebase={firebase}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ButtonAppBar />
          <Switch>
            <Route path="/create-appointment">
              <CreateAppointment />
            </Route>
            <Route path="/appointment-list">
              <AppointmentList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UseFirebaseAuthProvider>
  )
}

export default App
