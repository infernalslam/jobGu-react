import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

class Header extends Component {
    render () {
        return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to JobGu. <code>ReactJs</code> </h2>
        </div>
        <p className="App-intro">
          My JobGu by Mr.Kamonpob Pangwangtong
        </p>
      </div>
        )
    }
}

export default Header