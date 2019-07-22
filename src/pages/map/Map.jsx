import React, { Component } from 'react'

class Map extends Component {
  render() {
    return (
      <iframe
        style={{
          width: '100%',
          height: '100%'
        }}
        title="myIframe" 
        src="https://map.baidu.com/@12944920,4858972,13z" 
        frameBorder="0"
      ></iframe>
    )
  }
}

export default Map