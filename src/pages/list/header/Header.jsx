import React, { Component } from 'react'
import { NavBar, Icon, SearchBar } from 'antd-mobile'

import './header.css'

class HeaderContainer extends Component {
  render() {
    return (
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        <SearchBar placeholder="Search" maxLength={8} />
      </NavBar>
    )
  }
}

export default HeaderContainer