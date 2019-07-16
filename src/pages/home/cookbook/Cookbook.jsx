import React, { Component } from 'react'

import Header from './header/Header'
import Swiper from './swiper/Swiper'
import Search from '../../../components/search/Search'

export default class Cookbook extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Swiper></Swiper>
        <Search></Search>
      </>
    )
  }
}
