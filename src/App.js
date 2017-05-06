import React, { Component } from 'react'
import Header from './components/header'
import Form from './components/form'
import Feed from './components/feed'
import Report from './components/report'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      data: []
    }
    this.data = this.addData.bind(this)
  }
  addData (data) {
    console.log('data :', data)
  }
  render() {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column"><Form addData={this.addData} /></div>
              <div className="column"><Feed /></div>
              <div className="column"><Report /></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
