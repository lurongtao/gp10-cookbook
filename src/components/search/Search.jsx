import React, { Component } from 'react'

import {
  SearchContainer,
  BorderedInputContainer
} from './StyledSearch'

import SearchIcon from '../../assets/images/search.png'

class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <BorderedInputContainer background="transparent" hasBorder={true}>
          <img src={SearchIcon} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </BorderedInputContainer>
      </SearchContainer>
    )
  }
}

export default Search