import React, { Component } from 'react'

class Buttons extends Component {
    render() {
        const { previous, next } = this.props;

        return (
            <div className="buttons-container section">
            <div className="buttons">
              <button id="previous" onClick={ previous }> &#60; Previous</button>
              <button id="next" onClick={ next }>Next &#62; </button>
            </div>
          </div>
        )
    }
}

export default Buttons