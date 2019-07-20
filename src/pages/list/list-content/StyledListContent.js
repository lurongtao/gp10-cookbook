import styled from 'styled-components'

import border from 'components/styles/border'
import ellipsis from 'components/styles/ellipsis'

const StyledListContainer = styled.ul`
  background: #fff;
`

const Item = styled.li`
  display: flex;
  padding: .1rem;
  div:first-child {
    width: 1.3rem;
    img {
      width: 1.15rem;
      height: .75rem;
    }
  }
  div:last-child {
    flex: 1;
    overflow: hidden;
    h1, h3 {
      padding: .02rem 0;
      font-weight: 100;
    }
    h1 {
      font-size: .18rem;
      font-weight: 700;
    }
    h3 {
      font-size: .12rem;
      /* transform: scale(0.8); */
      /* transform-origin: 0 0; */
    }
  }
`

const BorderedItem = border({
  component: Item,
  borderWidth: '0 0 1px 0'
})

const Burdens = styled.h2`
  padding: .02rem 0;
  font-weight: 100;
  font-size: .14rem;
`

const EllipsisedBurdens = ellipsis({
  component: Burdens,
  lineClamp: 1
})

export {
  StyledListContainer,
  BorderedItem,
  Item,
  EllipsisedBurdens
}