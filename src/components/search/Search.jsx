import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {
  SearchContainer,
  BorderedInputContainer
} from './StyledSearch'

import SearchIcon from '../../assets/images/search.png'

class Search extends Component {
  static propTypes = {
    hasBorder: PropTypes.bool,
    background: PropTypes.string
  }

  render() {
    return (
      <SearchContainer>
        <BorderedInputContainer { ...this.props }>
          <img src={SearchIcon} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </BorderedInputContainer>
      </SearchContainer>
    )
  }
}

export default Search