import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
  height: .44rem;
  background: #ee742f;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 1.4rem;
    height: .3rem;
    border: solid 1px #fff;
    border-radius: .15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    li {
      width: 50%;
      text-align: center;
      line-height: .3rem;
      position: relative;
      z-index: 1;
      color: #fff;
      transition: all 300ms;
    }
    li.active {
      color: #ee742f;
    }
    li.slider {
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      border-radius: .15rem;
      background: #fff;
      z-index: 0;
    }
    li.slider.right {
      left: 50%;
    }
  }
`

export {
  StyledHeaderContainer
}