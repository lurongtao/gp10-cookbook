import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import Home from './pages/home/Home'

import './assets/styles/reset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    )
  }
}

export default App