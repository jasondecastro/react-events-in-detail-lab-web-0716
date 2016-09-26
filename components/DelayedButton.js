import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)

    this.updateCoords = this.updateCoords.bind(this)

    this.state = {
      coords: []
    }
  }

  updateCoords(e) {
    e.persist()
    this.props.onDelayedClick(e)
  }

  render() {
    return (
      <button onClick={this.updateCoords}>Button</button>
    )
  }
}

module.exports = DelayedButton