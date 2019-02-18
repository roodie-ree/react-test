import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { hot } from 'react-hot-loader'
import { Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './NavBar.scss'

interface Props {
}

interface State {
}

class NavBar extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className='grow'>
        <AppBar position='static'>
          <Toolbar color='inherit'>
            <IconButton className='menuButton' color='inherit'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className='grow' color='inherit'>
              App Bar
          </Typography>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default hot(module)(NavBar)
