import { css } from '@emotion/react';

import { breakpoints, breakpointsHeight } from '@styles/basic/breakpoints';

export const breakpointMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export const breakpointMaxWidthMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export const breakpointHeightMixin = Object.keys(breakpointsHeight).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-height: ${breakpointsHeight[label]}) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});
