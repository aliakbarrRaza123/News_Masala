import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // render() is the method that tells React what UI to display. 
  // component calls render when component is first created or whenever the component's state or props change.
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            // using key makes them different instances of News component
            element={<News key="general" pageSize={8} country="us" category="general" color="dark"/>}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={8} country="us" category="business" color="info"/>}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pageSize={8} country="us" category="entertainment" 
            color="warning"/>}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={8} country="us" category="health" color="primary"/>}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={8} country="us" category="science" color="secondary"/>}
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={8} country="us" category="sports"color="danger"/>}
          />
          <Route
            path="/technology"
            element={<News key="technology" pageSize={8} country="us" category="technology" color="success"/>}
          />
        </Routes>
      </HashRouter>
    )
  }
}


