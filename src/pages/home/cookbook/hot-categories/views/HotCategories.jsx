import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import HotCategoriesUI from './HotCategoriesUI'

import { loadDataAsync } from '../actionCreator'

import { List } from 'immutable'

const mapState = state => ({
  list: state.getIn(['menulist', 'list'])
})

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch(loadDataAsync())
  }
})

class HotCateGories extends Component {
  state = {
    list: List([])
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list.get('category')) {
      return {
        // list: [...nextProps.list.getIn(['category', '热门']).slice(0, 11), {
        //   img: '',
        //   title: '更多...'
        // }]

        list: nextProps.list.getIn(['category', '热门']).slice(0, 11).push({
          img: '',
          title: '更多...'
        })
      }
    }

    return null
  }

  render() {
    return (
      <HotCategoriesUI onItemClick={this.handleItemClick.bind(this)} list={this.state.list.toJS()}></HotCategoriesUI>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }

  handleItemClick() {
    this.props.history.push('/list', { id: 0 })
  }
}

export default connect(mapState, mapDispatch)(withRouter(HotCateGories))