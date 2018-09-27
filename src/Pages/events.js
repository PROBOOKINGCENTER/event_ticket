import React, { Component } from 'react'

class Events extends Component {
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,NextState){
        return nextProps
    }
  render() {
    return (
      <div>
          <h1>Events</h1>
      </div>
    )
  }
}

export default Events