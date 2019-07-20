import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListContentUI from './ListContentUI'

const mapState = state => ({
  list: state.foodlist.list
})

class ListContentContainer extends Component {
  render() {
    return (
      <ListContentUI list={this.props.list}></ListContentUI>
    )
  }
}

export default connect(mapState)(ListContentContainer)