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
        <div className="contentWrap">
          <Route path={`${path}/category`} children={(props) => <MenuLeft { ...props } />}></Route>
          <Route path={`${path}/material`} children={(props) => <MenuRight { ...props } />}></Route>
        </div>
      </StyledCategories>
    )
  }

  handleMessage(dir) {
    let path = dir === 'left' ? '/category' : '/material'
    this.props.history.push(this.props.match.path + path, { dir })
  }
}

export default withRouter(Categories)