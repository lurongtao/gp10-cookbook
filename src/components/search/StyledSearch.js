import styled from 'styled-components'

import border from '../styles/border'

const SearchContainer = styled.div`
  padding: .12rem .15rem;
`

const InputContainer = styled.div`
  height: .4rem;
  /* border: ${props => props.hasBorder ? 'solid 1px #ee742f' : '0' }; */
  border-radius: .04rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  background: ${props => props.background};
  img {
    width: .2rem;
    height: .2rem;
  }
`

const BorderedInputContainer = border({
  component: InputContainer,
  borderRadius: 0.04,
  borderColor: '#ee742f'
})

export {
  SearchContainer,
  InputContainer,
  BorderedInputContainer
}