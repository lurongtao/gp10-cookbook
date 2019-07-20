import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import Header from './header/Header'

import { StyledListContainer,  BorderedItem, EllipsisedBurdens } from './list-content/StyledListContent'

import './list.css'

// class ListContainer extends Component {
//   render() {
//     return (
//       <>
//         <Header></Header>
//         <ListContent></ListContent>
//       </>
//     )
//   }
// }

// export default withRouter(ListContainer)


function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

let pageIndex = 0;

const mapState = state => ({
  list: state.foodlist.list
})

class ListContainer extends React.Component {
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
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
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

    let data = []

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.list.slice(0, (++pageIndex)*10 + 10)),
      isLoading: false,
    })
  }

  render() {
    const row = (value,id) => {
      return (
        <BorderedItem key={id + value.id} hasBorder={true}>
          <div>
            <img src={value.img} alt=""/>
          </div>
          <div>
            <h1>{value.name}</h1>
            <EllipsisedBurdens>{value.burdens}</EllipsisedBurdens>
            <h3>{value.all_click}浏览 {value.favorites}收藏</h3>
          </div>
        </BorderedItem>
      )
    }

    return (
      <StyledListContainer>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => <Header />}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderBodyComponent={() => <MyBody />}
          renderRow={row}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </StyledListContainer>
    )
  }
}

export default connect(mapState)(withRouter(ListContainer))