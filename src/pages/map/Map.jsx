import React, { Component } from 'react'

class Map extends Component {
  render() {
    return (
      <>
        <iframe
          style={{
            width: '100%',
            height: '350px'
          }}
          title="myIframe" 
          src="https://map.baidu.com/@12944920,4858972,13z" 
          frameBorder="0"
        ></iframe>
        <div>
          <div style={{textAlign: 'center'}}>
            <button style={{
              marginTop: '10px',
              width: '100%',
              padding: '10px',
              background: '#eee',
              borderRadius: '10px',
              width: '90%'
            }}>
              扫描
            </button>
          </div>
          <div style={{textAlign: 'center'}}>
            <button style={{
              marginTop: '10px',
              width: '100%',
              padding: '10px',
              background: '#eee',
              borderRadius: '10px',
              width: '90%'
            }}>
              拍照
            </button>
          </div>
          <ul style={{width: '100%', height: '100px', display: 'flex'}}>
            <li style={{flex: 1, height: '150px'}}>
              
            </li>
            <li style={{flex: 1, height: '150px'}}>

            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Map