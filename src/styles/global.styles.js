import { createGlobalStyle } from 'styled-components';
import _map from 'lodash/map';

import { breakpointMixin } from './mixins';

import { typography, colors } from './basic';

const baseFontFamily = _map(typography.fontFamily, (el) => `${el}`).join(', ');

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    font-family: ${baseFontFamily};
    font-size: ${typography.fontSize.base};
    overflow-x: hidden;
    overflow-y: scroll;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    background: ${(props) => props.theme.backgroundColor};
    font-size: ${typography.fontSize.normal};
    line-height: 1.6;
    color: ${(props) => props.theme.textColors.primary};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  p,
  ol,
  ul {
    font-weight: ${typography.fontWeight.regular};
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: ${typography.fontWeight.light};
  }

  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: ${typography.fontSize.h1Small};

    ${breakpointMixin.portraitTablet`
      font-size: ${typography.fontSize.h1Regular};
    `}
  }

  h2 {
    font-size: ${typography.fontSize.h2Small};

    ${breakpointMixin.portraitTablet`
      font-size: ${typography.fontSize.h2Regular};
    `}
  }

  h3 {
    font-size: ${typography.fontSize.h3Small};

    ${breakpointMixin.portraitTablet`
      font-size: ${typography.fontSize.h3Regular};
    `}
  }

  h4 {
    font-size: ${typography.fontSize.h4Small};

    ${breakpointMixin.portraitTablet`
      font-size: ${typography.fontSize.h4Regular};
    `}
  }

  a {
    color: ${colors.textColors.primary};
    text-decoration: none;
    cursor: pointer;
  }
  img {
    max-width: none;
  }
  button {
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
  }
  .root {
    height: 100%;
  }
`;

export { GlobalStyles };
