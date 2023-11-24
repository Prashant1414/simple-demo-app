import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
<>
  {/* The sidebar */}
  <div className="sidebar">
    <a className="active" href="#home">
      Home
    </a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  {/* Page content */}
  <div className="content">..</div>
</>

      
    )
  }
}
