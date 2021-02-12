import { css } from 'styled-components';

const ElementsCommonStyle = css`
  display: block;
  position: absolute;
  bottom: 0;
  span, *::before, *::after {
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

const ElementsCommonStyleUnspecified = css`
  display: block;
  position: absolute;
  span, *::before, *::after {
    display: block;
    position: absolute;
  }
`;

const ElementsSaferStyle = css`
  display: block;
  position: absolute;
  bottom: 0;
`;

export {
  ElementsCommonStyle,
  ElementsSaferStyle,
  ElementsCommonStyleUnspecified
};
