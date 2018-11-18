import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Character from '../Character'
import './index.css'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
})

const App = () =>
  <React.Fragment>
    <CssBaseline />
    <Character />
  </React.Fragment>

export default withStyles(styles)(App)
