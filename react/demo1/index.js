import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListDemo from './ListDemo'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>react</h1>
        <ListDemo />
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
