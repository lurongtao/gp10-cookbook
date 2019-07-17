import styled from 'styled-components'

const Item = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: .6rem;
    height: .6rem;
    border-radius: .06rem;
  }
`

const Title = styled.div`
  height: .5rem;
  line-height: .5rem;
  padding-left: .15rem;
  background: #fff;
  color: #666;
`

export {
  Item,
  Title
}