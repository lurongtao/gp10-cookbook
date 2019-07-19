import React from 'react'

import StyledMenuContainer, { BorderItem, Item } from './StyledMenuContainer'

export default (props) => {
  return (
    <StyledMenuContainer hasBorder={true}>
        <div id={`left-${props.type}`}>
          <ul>
            {
              props.data && Object.keys(props.data).map(value => {
                return value === props.currentKey
                  ? <li key={value} className="active"><BorderItem hasBorder={true}>{value}</BorderItem></li>
                  : <li onTouchStart={props.onChange.bind(this, value)} key={value}><Item hasBorder={true}>{value}</Item></li>
              })
            }
          </ul>
        </div>
        <div id={`right-${props.type}`}>
          <ul>
            {
              props.data && props.data[props.currentKey].map((value,index) => (
                <li key={`${value}-${index}`}><span>{value.title || value}</span></li>
              ))
            }
          </ul>
        </div>
      </StyledMenuContainer>
  )
}