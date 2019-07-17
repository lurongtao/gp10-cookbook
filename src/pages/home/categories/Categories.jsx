import React, { Component } from 'react'

import { HeaderContainer as Header } from './header/'
import { MenuContainer as Menu } from './menu/'
import Search from 'components/search/Search'


class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'menu1'
    }
    this.handleMessage = this.handleMessage.bind(this)
  }
  
  render() {
    return (
      <>
        <Header onMessage={this.handleMessage}></Header>
        <Search background="#eee" hasBorder={false}></Search>
        <Menu type={this.state.type}></Menu>
      </>
    )
  }

  handleMessage(dir) {
    this.setState({
      type: dir === 'left' ? 'menu1' : 'menu2'
    })
  }
}

export default Categories