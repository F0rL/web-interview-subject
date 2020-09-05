import React, { Component } from 'react'

export default class ListDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, title: 'a' },
        { id: 2, title: 'b' },
        { id: 3, title: 'c' }
      ]
    }
  }

  // 静态不用写bind this
  clickHandler = (title, e) => {
    console.log(`you click ${title}`)
    // 封装事件
    console.log(e)
    // 原生事件
    console.log(e.nativeEvent);
  }

  render() {
    return (
      <div>
        <h2>ListDemo</h2>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={item.id} onClick={e => this.clickHandler(item.title, e)}>
                index: {index}, title: {item.title}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
