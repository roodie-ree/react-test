import React from 'react'
import { hot } from 'react-hot-loader'
import Button from '@material-ui/core/Button'
import Type from '@material-ui/core/Typography'

interface Props {
}

interface State {
  counter: number
}

class Counter extends React.PureComponent<Props, State> {
  readonly state = { counter: 0 }

  handleIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 12 }))
  }

  handleDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 5 }))
  }

  render() {
    return (
      <div>
        <Type>Counter</Type>
        <Type>{this.state.counter}</Type>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
      </div>
    )
  }
}

export default hot(module)(Counter)
