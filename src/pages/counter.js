import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = (change) => {
    this.setState(() => ({
      count: this.state.count + change
    }))
  }

  render = () =>
    <div style={{ right: '50%', bottom: '50%', transform: 'translate(50%,50%)', position: 'absolute' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '500%', color: 'tomato', textAlign: 'center', padding: '1rem' }}>{this.state.count}</p>
      <div style={{ textAlign: 'center', paddingTop: '0.8rem' }}>
        <button style={{ marginRight: '3px' }} onClick={() => this.handleClick(1)}>
          plus
        </button>
        <button style={{ marginLeft: '3px' }} onClick={() => this.handleClick(-1)}>
          minus
        </button>
      </div>
      <div style={{ padding: '1rem 0', textAlign: 'center' }}>
        <Link to="/">back home</Link>
      </div>
    </div>
}
