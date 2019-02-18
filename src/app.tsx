import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import NavBar from './NavBar/NavBar'
import Counter from './counter'

interface Props {
}

interface State {
  isUserLoggedIn: boolean
}

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff8f00' },
    secondary: { main: '#1565c0' }
  }
})

class App extends React.PureComponent<Props, State> {
  readonly state = { isUserLoggedIn: false }
  render() {
    const loginLogout = this.state.isUserLoggedIn
      ? { link: '/logout', text: 'Logout', greet: 'Goodbye' }
      : { link: '/login', text: 'Login', greet: 'Hello' }
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <NavBar />
            <nav>
              <Link to={loginLogout.link}>{loginLogout.text}</Link>
              <Link to='/counter'>Counter</Link>
            </nav>
            <Switch>
              <Route path={loginLogout.link} render={() => (
                <p>{loginLogout.greet}</p>
              )} />
              <Route path='/counter' component={Counter} />
            </Switch>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
