import React from 'react'

import { TabBar } from 'antd-mobile'

import cookbook from '../../assets/images/cookbook.png'
import cookbookActive from '../../assets/images/cookbook-active.png'
import menu from '../../assets/images/menu.png'
import menuActive from '../../assets/images/menu-active.png'
import location from '../../assets/images/location.png'
import locationActive from '../../assets/images/location-active.png'
import more from '../../assets/images/more.png'
import moreActive from '../../assets/images/more-active.png'

import Cookbook from './cookbook/Cookbook'
import { Categories } from './categories/'

import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    }
  }
  
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#CCC"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              })
              this.props.history.push('/home')
            }}
            data-seed="cookbook"
          >
            <Cookbook></Cookbook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  18px 18px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  18px 18px no-repeat` }}
              />
            }
            title="分类"
            key="memu"
            selected={this.state.selectedTab === 'menu'}
            onPress={() => {
              this.setState({
                selectedTab: 'menu',
              })
              this.props.history.push('/home/category')
            }}
            data-seed="menu"
          >
            <Categories></Categories>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="美食地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <div>map</div>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <div>more</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Home)