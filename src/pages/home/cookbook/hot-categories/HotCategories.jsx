import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

import { Item, Title } from './StyledHotCategories'

class HotCateGories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <>
        <Title>
          热门分类
        </Title>
        <Grid 
          data={this.state.list}
          columnNum={4}
          hasLine={false}
          renderItem={dataItem => (
            <Item>
              {dataItem.img && <img src={dataItem.img} alt="" />}
              <span>{dataItem.title}</span>
            </Item>
          )} 
        />
      </>
    )
  }

  componentDidMount() {
    fetch('/api/category')
      .then(response => response.json())
      .then(result => {
        this.setState({
          list: [...result.data.category['热门'].slice(0, 11), {
            img: '',
            title: '更多...'
          }]
        })
      })
  }
}

export default HotCateGories