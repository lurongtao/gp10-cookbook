import styled from 'styled-components'

const border = function({
  component=null,
  borderWidth='1px',
  borderStyle='solid',
  borderColor='#ccc',
  borderRadius=0
}) {
  return styled(component)`
    position: relative;
    border-radius: ${borderRadius}rem;
    &::after {
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      content: "";
      border-color: ${borderColor};
      border-style: ${borderStyle};
      border-width: ${props => props.hasBorder ? borderWidth : 0};

      @media screen and (max--moz-device-pixel-ratio: 1.49),
        (-webkit-max-device-pixel-ratio: 1.49),
        (max-device-pixel-ratio: 1.49),
        (max-resolution: 143dpi),
        (max-resolution: 1.49dppx) {
          width: 100%;
          height: 100%;
          border-radius: ${borderRadius}rem;
      }
      @media screen and (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),
        (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),
        (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),
        (min-resolution: 144dpi) and (max-resolution: 239dpi),
        (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
          width: 200%;
          height: 200%;
          transform: scale(.5);
          border-radius: ${borderRadius * 2}rem;
      }
      @media screen and (min--moz-device-pixel-ratio: 2.5),
        (-webkit-min-device-pixel-ratio: 2.5),
        (min-device-pixel-ratio: 2.5),
        (min-resolution: 240dpi),
        (min-resolution: 2.5dppx) {
          width: 300%;
          height: 300%;
          transform: scale(.333333);
          border-radius: ${borderRadius * 3}rem;
      }
      transform-origin: 0 0;
    }
  `
}

export default border