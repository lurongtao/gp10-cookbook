import React from 'react'
import { Carousel } from 'antd-mobile'

import Img1 from '../../../../assets/images/swiper-1.png'
import Img2 from '../../../../assets/images/swiper-2.jpeg'
import Img3 from '../../../../assets/images/swiper-3.jpeg'

class Swiper extends React.Component {
  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
      >
        <img src={Img1} alt=""/>
        <img src={Img2} alt=""/>
        <img src={Img3} alt=""/>
      </Carousel>
    )
  }
}

export default Swiper