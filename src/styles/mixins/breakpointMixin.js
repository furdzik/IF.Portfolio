// import {
//   breakpoints,
//   breakpointsHeight,
//   breakpointMinWidthMixin,
//   breakpointMinHeightMixin
// } from 'css-in-js-styles-utils';

// import { breakpoints, breakpointsHeight, breakpointMinWidthMixin } from 'css-in-js-styles-utils';

// console.log(breakpointsHeight);
// export const breakpointMixin = Object
//   .keys(breakpoints)
//   .reduce(
//     (acc, current) => breakpointMinWidthMixin(acc, current, breakpoints), {}
//   );

// export const breakpointHeightMixin = Object
//   .keys(breakpointsHeight)
//   .reduce(
//     (acc, current) => breakpointMinHeightMixin(acc, current, breakpoints), {}
//   );

import { css } from '@emotion/react';

import { breakpoints } from '@styles/basic';

export const breakpointMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
