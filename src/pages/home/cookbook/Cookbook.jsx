import React, { Component } from 'react'

import Header from './header/Header'
import Swiper from './swiper/Swiper'
import Search from '../../../components/search/Search'
import HotCategories from './hot-categories/HotCategories'

import {
  CookbookContainer
} from './StyledCookbook'

export default class Cookbook extends Component {
  render() {
    return (
      <CookbookContainer>
        <Header></Header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCategories></HotCategories>
      </CookbookContainer>
    )
  }
}
