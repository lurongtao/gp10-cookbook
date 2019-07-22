import React, { Component } from 'react'

import MenuUI from './MenuUI'

import BScroll from 'better-scroll'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

const mapState = state => {
  // let { category, material } = state.menulist.list
  return {
    category: state.menulist.list.category,
    material: state.menulist.list.material
  }
}

class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKey: this.props.type === 'category' ? '热门' : '肉类'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    let { type, category, material } = this.props
    return (
      <MenuUI
        {...this.props}
        type={type}
        currentKey={this.state.currentKey}
        data={type === 'category' ? category : material}
        onChange={this.handleChange}
      >
      </MenuUI>
    )
  }

  componentDidMount() {
    let { type } = this.props
    this.bScrollLeft = new BScroll(`#left-${type}`, { click: true })
    new BScroll(`#right-${type}`, { click: true })
  }

  handleChange(key, e) {
    this.setState({
      currentKey: key
    })

    let currentPos = e.touches[0].clientY - 108
    if (currentPos < 100) {
      this.bScrollLeft.scrollTo(0, 0)
    }
    if (currentPos > 300) {
      this.bScrollLeft.scrollTo(0, this.bScrollLeft.maxScrollY)
    }
  }
}

export default connect(mapState)(withRouter(MenuContainer))