import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListDemo from './ListDemo'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react</h1>
        <ListDemo />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
