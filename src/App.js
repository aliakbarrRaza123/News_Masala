import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // render() is the method that tells React what UI to display. 
  // component calls render when component is first created or whenever the component's state or props change.
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}


