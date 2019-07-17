import styled from 'styled-components'

const EfContainer = styled.div`
  > div:first-child {
    height: .5rem;
    line-height: .5rem;
    padding-left: .15rem;
    color: #666;
  }

  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    margin: 0 .15rem;
    dl {
      width: calc(50% - .075rem);
      img {
        width: 100%;
      }
      background: #fff;
      margin-bottom: .15rem;
      dd:nth-of-type(1) {
        text-align: center;
        font-size: .18rem;
        font-weight: bold;
        padding-top: .05rem;
      }
      dd:nth-of-type(2) {
        text-align: center;
        padding-bottom: .05rem;
        color: #666;
        font-size: .12rem;
      }
    }
    dl:nth-child(odd) {
      margin-right: .15rem;
    }
  }
`

export {
  EfContainer
}