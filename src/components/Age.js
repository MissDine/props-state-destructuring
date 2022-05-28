import React, { Component } from 'react'

//Destructuring in class components
class Age extends Component {
  render() {
      const {age} = this.props
    return (
      <div>{age}</div>
    )
  }
}

export default Age