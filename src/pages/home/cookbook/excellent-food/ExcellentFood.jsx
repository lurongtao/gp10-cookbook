import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  EfContainer
} from './StyledExcellentFood'

const mapState = state => ({
  list: state.getIn(['foodlist', 'list']).slice(0, 10)
})

class ExcellentFood extends Component {
  render() {
    return (
      <EfContainer>
        <div>精品好菜</div>
        <div>
          {
            this.props.list.map(value => (
              <dl key={value.get('id')}>
                <dt>
                  <img src={value.get('img')} alt={value.get('name')}/>
                </dt>
                <dd>{value.get('name')}</dd>
                <dd>{value.get('all_click')}浏览 {value.get('favorites')}收藏</dd>
              </dl>
            ))
          }
        </div>
      </EfContainer>
    )
  }
}

export default connect(mapState)(ExcellentFood)