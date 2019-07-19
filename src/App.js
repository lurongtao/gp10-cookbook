import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './pages/home/Home'

import './assets/styles/reset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home></Home>
        </Router>
      </Provider>
    )
  }
}

export default App