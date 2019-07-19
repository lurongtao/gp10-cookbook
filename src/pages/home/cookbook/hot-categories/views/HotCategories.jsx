import React, { Component } from 'react'
import { connect } from 'react-redux'

import HotCategoriesUI from './HotCategoriesUI'

import { loadDataAsync } from '../actionCreator'

const mapState = state => ({
  list: state.menulist.list
})

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch(loadDataAsync())
  }
})

class HotCateGories extends Component {
  state = {
    list: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list.category) {
      return {
        list: [...nextProps.list.category['热门'].slice(0, 11), {
          img: '',
          title: '更多...'
        }]
      }
    }

    return null
  }

  render() {
    return (
      <HotCategoriesUI list={this.state.list}></HotCategoriesUI>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }
}

export default connect(mapState, mapDispatch)(HotCateGories)