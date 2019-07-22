import React, { Component } from 'react'

import { MenuContainer as Menu } from 'components/menu/'

class MenuContainer extends Component {
  
  render() {
    return (
      <Menu { ...this.props } type="category"></Menu>
    )
  }
}

export default MenuContainer