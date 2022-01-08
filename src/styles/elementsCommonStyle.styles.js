import { css } from '@emotion/react';

const ElementsCommonStyle = css`
  position: absolute;
  bottom: 0;
  display: block;
  span, *::before, *::after {
    position: absolute;
    bottom: 0;
    display: block;
  }
`;

const ElementsCommonStyleUnspecified = css`
  position: absolute;
  display: block;
  div, span, *::before, *::after {
    position: absolute;
    display: block;
  }
`;

const ElementsSaferStyle = css`
  position: absolute;
  bottom: 0;
  display: block;
`;

export {
  ElementsCommonStyle,
  ElementsSaferStyle,
  ElementsCommonStyleUnspecified
};
