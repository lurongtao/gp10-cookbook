import React from 'react'

import { StyledListContainer, BorderedItem, EllipsisedBurdens } from './StyledListContent'

export default (props) => {
  return (
    <StyledListContainer>
      {
        props.list.map((value,index) => (
          <BorderedItem key={index + value.id} hasBorder={true}>
            <div>
              <img src={value.img} alt=""/>
            </div>
            <div>
              <h1>{value.name}</h1>
              <EllipsisedBurdens>{value.burdens}</EllipsisedBurdens>
              <h3>{value.all_click}浏览 {value.favorites}收藏</h3>
            </div>
          </BorderedItem>
        ))
      }
      
    </StyledListContainer>
  )
}