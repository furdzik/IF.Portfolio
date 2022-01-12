import { css } from '@emotion/react';

import _map from 'lodash/map';

import theme from '@styles/theme';
import { breakpointMixin } from '@styles/mixins';

const baseFontFamily = _map(theme.fontFamily, (el) => `${el}`).join(', ');

const GlobalStyles = css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    font-family: ${baseFontFamily};
    font-size: ${theme.fontSize.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    background: ${theme.layout.background};
    font-size: ${theme.fontSize.normal};
    line-height: 1.6;
    color: ${theme.textColors.primary};
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
    font-weight: ${theme.fontWeight.regular};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fontFamily.shadowsInto}, sans-serif;
    font-weight: ${theme.fontWeight.light};
  }

  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: ${theme.fontSize.h1Small};

    ${breakpointMixin.portraitTablet(css`
      font-size: ${theme.fontSize.h1Regular};
    `)};
  }

  h2 {
    font-size: ${theme.fontSize.h2Small};

    ${breakpointMixin.portraitTablet(css`
      font-size: ${theme.fontSize.h2Regular};
  `)};
  }

  h3 {
    font-size: ${theme.fontSize.h3Small};

    ${breakpointMixin.portraitTablet(css`
      font-size: ${theme.fontSize.h3Regular};
    `)};
  }

  h4 {
    font-size: ${theme.fontSize.h4Small};

    ${breakpointMixin.portraitTablet(css`
      font-size: ${theme.fontSize.h4Regular};
  `)};
  }

  a {
    color: ${theme.textColors.primary};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: none;
  }
  ul, ol {
    list-style: none;
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
  .root,
  #root {
    height: 100%;
  }
`;

export {
  GlobalStyles
};
