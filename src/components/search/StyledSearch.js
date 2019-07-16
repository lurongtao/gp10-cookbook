import styled from 'styled-components'

const SearchContainer = styled.div`
  padding: .12rem .15rem;
`

const BorderContainer = styled.div`
  height: .4rem;
  border: ${props => props.hasBorder ? 'solid 1px #ee742f' : '0' };
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

const OnePxBorder = styled(BorderContainer)`
  position: relative;
  border-radius: ${props => props.radius};
  &::after {
    pointer-events: none;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    content: "\0020";
    border-color: ${props => props.borderColor || '#ccc'};
    border-style: ${props => props.borderStyle || 'solid'};
    border-width: ${props => props.borderWidth || '1px'};

    @include responsive(retina1x) {
        width: 100%;
        height: 100%;
        @if $radius != null {
            border-radius: $radius;
        }
    }
    @include responsive(retina2x) {
        width: 200%;
        height: 200%;
        @include transform(scale(.5));
        @if $radius != null {
            border-radius: $radius * 2;
        }
    }
    @include responsive(retina3x) {
        width: 300%;
        height: 300%;
        @include transform(scale(.33333));
        @if $radius != null {
            border-radius: $radius * 3;
        }
    }
    @include transform-origin(0 0);
  }
`

export {
  SearchContainer,
  BorderContainer,
  OnePxBorder
}