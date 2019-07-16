import React, { Component } from 'react'

import {
  SearchContainer,
  OnePxBorder
} from './StyledSearch'

import SearchIcon from '../../assets/images/search.png'

class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <OnePxBorder background="transparent" hasBorder={true}>
          <img src={SearchIcon} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </OnePxBorder>
      </SearchContainer>
    )
  }
}

export default Search