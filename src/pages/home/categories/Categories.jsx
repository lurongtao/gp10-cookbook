import React, { Component } from 'react'

import { HeaderContainer as Header } from './header/'
import { MenuContainerLeft as MenuLeft, MenuContainerRight as MenuRight } from './menu/'
import Search from 'components/search/Search'

import {
  StyledCategories
} from './StyledCategories'

import {
  Route,
  withRouter
} from 'react-router-dom'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.handleMessage = this.handleMessage.bind(this)
  }
  
  render() {
    let path = this.props.match.path
    return (
      <StyledCategories>
        <Header onMessage={this.handleMessage}></Header>
        <Search background="#eee" hasBorder={false}></Search>

        <Route path={`${path}/category`} component={MenuLeft}></Route>
        <Route path={`${path}/material`} component={MenuRight}></Route>

      </StyledCategories>
    )
  }

  handleMessage(dir) {
    let path = dir === 'left' ? '/category' : '/material'
    this.props.history.push(this.props.match.path + path)
  }
}

export default withRouter(Categories)