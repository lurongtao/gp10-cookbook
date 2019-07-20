import React, { Component } from 'react'

import {
  StyledHeaderContainer
} from './StyledHeaderContainer'

import { withRouter } from 'react-router-dom'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: 'left'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname === '/home/category') {
      return {
        dir: 'left'
      }
    }
    return {
      dir: 'right'
    }
  }

  render() {
    let { dir } = this.state
    return (
      <StyledHeaderContainer>
        <ul>
          <li onClick={() => this.handleClickMove('left')} className={dir==='left' ? 'active' : ''}>分类</li>
          <li onClick={() => this.handleClickMove('right')} className={dir==='right' ? 'active' : ''}>食材</li>
          <li className={dir==='right' ? 'slider right' : 'slider'}></li>
        </ul>
      </StyledHeaderContainer>
    )
  }

  handleClickMove(dir) {
    this.setState({
      dir
    })
    this.props.onMessage(dir)
  }
}

export default withRouter(HeaderContainer)