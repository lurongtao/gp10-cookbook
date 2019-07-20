import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './pages/home/Home'
import List from './pages/list/List'

import './assets/styles/reset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
        </Router>
      </Provider>
    )
  }
}

export default App