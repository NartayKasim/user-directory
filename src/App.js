import React, { Component } from 'react';
import Display from './Components/Display/Display'
import Buttons from './Components/Buttons'
import formatData from './data'
import './index.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      directory: formatData,
      dataIndex: 0,
    };
  }

  previous = () => {
    if (this.state.dataIndex > 0) {
      let idx = this.state.dataIndex
      this.setState({ dataIndex: idx - 1 })
    }
  }

  next = () => {
    if (this.state.dataIndex + 1 < this.state.directory.length) {
      let idx = this.state.dataIndex
      this.setState({ dataIndex: idx + 1 })
    }
  }

  render() {
    return(
      <div className="app">
        <section className="header section"><h1>Home</h1></section>
        <section className="content">
          <Display user={ this.state.directory[this.state.dataIndex] } length={ this.state.directory.length }/>
          <Buttons previous={ this.previous } next={this.next}/>
        </section>
      </div>
    )
  }
}

export default App;