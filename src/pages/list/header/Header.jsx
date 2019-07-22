import React, { Component } from 'react'
import { NavBar, Icon, SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

import './header.css'

class HeaderContainer extends Component {
  render() {
    return (
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.goBack()}
      >
        <SearchBar placeholder="Search" maxLength={8} />
      </NavBar>
    )
  }
}

export default withRouter(HeaderContainer)