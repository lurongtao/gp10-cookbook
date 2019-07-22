import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { ListView } from 'antd-mobile';

import ListContentUI from './ListContentUI'

let pageIndex = 0;

const mapState = state => ({
  list: state.foodlist.list
})

class ListContent extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    }
  }

  componentDidMount() {
    const hei = window.innerHeight;
    // simulate initial Ajax

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.list.slice(0, 10)),
      isLoading: false,
      height: hei,
    })
  }

  onEndReached = (event) => {
    
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }

    this.setState({ isLoading: true })

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.list.slice(0, (++pageIndex)*10 + 10)),
      isLoading: false,
    })
  }

  render() {
    return (
      <ListContentUI
        {...this.props}
        dataSource={this.state.dataSource}
        onEndReached={this.onEndReached}
        isLoading={this.state.isLoading}
        height={this.state.height}
      ></ListContentUI>
    )
  }
}

export default connect(mapState)(ListContent)