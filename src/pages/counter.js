import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  render () {
    return (
      <div style={{ right: '50%', bottom: '50%', transform: 'translate(50%,50%)', position: 'absolute' }}>
      <h1>Counter</h1>
      <p>current count: {this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        plus
      </button>
      <button onClick={() => this.setState({ count: this.state.count - 1 })}>
        minus
      </button>
    </div>
    )
  }
}

export default Counter
