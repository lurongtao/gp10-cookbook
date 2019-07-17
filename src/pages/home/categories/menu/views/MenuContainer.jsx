import React, { Component } from 'react'

import MenuComponent from 'components/menu/MenuContainer'

class MenuContainer extends Component {
  
  render() {
    return (
      <MenuComponent type={this.props.type}></MenuComponent>
    )
  }
}

export default MenuContainer