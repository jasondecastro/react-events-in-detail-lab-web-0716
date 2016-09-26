import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)

    this.updateCoords = this.updateCoords.bind(this)

    this.state = {
      coords: []
    }
  }

  updateCoords(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.updateCoords}>Button</button>
    )
  }
}

module.exports = CoordinatesButton