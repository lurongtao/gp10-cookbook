// @mixin wrap($is-wrap: true) {
//   @if $is-wrap == true {
//       word-wrap: break-word;
//       word-break: break-all;
//   } @else {
//       white-space: nowrap;
//   }
// }

// /**
// * @module 文本
// * @description 单行文本溢出时显示省略号
// * @method ellipsis
// * @version 1.0.0
// * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>
// * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>
// */
// @mixin ellipsis($width: null, $line-clamp: 1) {
  // overflow: hidden;
  // text-overflow: ellipsis;
  // width: $width;
//   @if abs($line-clamp) > 1 {
//       // 要使得多行截取生效，display的值只能为-webkit-box
//       display: -webkit-box !important;
//       -webkit-line-clamp: $line-clamp;
//       // @include flex-direction(column);
//       @include wrap;
//   } @else {
//       @include wrap(false);
//   }
// }

import styled from 'styled-components'

const wrap = (isWrap=true) => {
  if (isWrap) {
    return `
      word-wrap: break-word;
      word-break: break-all;
    `
  } else {
    return `
      white-space: nowrap;
    `
  }
}

const Case1 = (lineClamp) => {
  return `
    display: -webkit-box !important;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    ${wrap()}
  `
}
const Case2 = `
  ${wrap(false)}
`

export default ({
  component=null,
  width='auto',
  lineClamp=1
}) => {
  return styled(component)`
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    ${Math.abs(lineClamp) > 1 ? Case1(lineClamp) : Case2}
  `
}