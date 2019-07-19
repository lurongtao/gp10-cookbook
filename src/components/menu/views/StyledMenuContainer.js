import styled from 'styled-components'

import border from 'components/styles/border'

const StyledMenuContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  div:first-child {
    width: .64rem;
    height: 100%;
    ul {
      width: 100%;
      li {
        height: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f3f3;
      }
      li.active {
        background: #fff;
      }
    }
  }

  div:last-child {
    flex: 1;
    padding: .2rem 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        height: .4rem;
        width: 33.333333%;
        line-height: .4rem;
        text-align: center;
      }
    }
  }
`

const Item = styled.span`
  display: block;
  height: 100%;
  line-height: .5rem;
`

const BorderItem = styled(border({
  component: Item,
  borderWidth: '0 0 1px 0',
  borderColor: '#ee742f'
}))`
  color: #ee742f;
`

export default border({
  component: StyledMenuContainer,
  borderWidth: '1px 0 0 0'
})

export {
  BorderItem,
  Item
}