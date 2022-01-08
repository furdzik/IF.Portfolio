import { css } from '@emotion/react';

import _map from 'lodash/map';

import ShadowIntoWoff from '@assets/fonts/ShadowsIntoLightTwo-Regular.woff';
import ShadowIntoTtf from '@assets/fonts/ShadowsIntoLightTwo-Regular.ttf';
import ShadowIntoSvg from '@assets/fonts/ShadowsIntoLightTwo-Regular.svg';

import RobotoRegularWoff from '@assets/fonts/Roboto-Regular.woff';
import RobotoRegularTtf from '@assets/fonts/Roboto-Regular.ttf';
import RobotoRegularSvg from '@assets/fonts/Roboto-Regular.svg';

import RobotoMediumWoff from '@assets/fonts/Roboto-Medium.woff';
import RobotoMediumTtf from '@assets/fonts/Roboto-Medium.ttf';
import RobotoMediumSvg from '@assets/fonts/Roboto-Medium.svg';

import RobotoLightWoff from '@assets/fonts/Roboto-Light.woff';
import RobotoLightTtf from '@assets/fonts/Roboto-Light.ttf';
import RobotoLightSvg from '@assets/fonts/Roboto-Light.svg';

import RobotoBlackWoff from '@assets/fonts/Roboto-Black.woff';
import RobotoBlackTtf from '@assets/fonts/Roboto-Black.ttf';
import RobotoBlackSvg from '@assets/fonts/Roboto-Black.svg';

import RobotoBoldWoff from '@assets/fonts/Roboto-Bold.woff';
import RobotoBoldTtf from '@assets/fonts/Roboto-Bold.ttf';
import RobotoBoldSvg from '@assets/fonts/Roboto-Bold.svg';

import RobotoThinWoff from '@assets/fonts/Roboto-Thin.woff';
import RobotoThinTtf from '@assets/fonts/Roboto-Thin.ttf';
import RobotoThinSvg from '@assets/fonts/Roboto-Thin.svg';

import theme from '@styles/theme';
import { breakpointMixin, fontfaceMixin } from '@styles/mixins';

const baseFontFamily = _map(theme.fontFamily, (el) => `${el}`).join(', ');

const GlobalStyles = css`
  ${fontfaceMixin(
    theme.fontFamily.shadowsInto, {
      woff: ShadowIntoWoff, ttf: ShadowIntoTtf, svg: ShadowIntoSvg
    },
    theme.fontWeight.regular
  )};

  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoRegularWoff, ttf: RobotoRegularTtf, svg: RobotoRegularSvg
    },
    theme.fontWeight.regular
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoMediumWoff, ttf: RobotoMediumTtf, svg: RobotoMediumSvg
    },
    theme.fontWeight.medium
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoLightWoff, ttf: RobotoLightTtf, svg: RobotoLightSvg
    },
    theme.fontWeight.medium
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoLightWoff, ttf: RobotoLightTtf, svg: RobotoLightSvg
    },
    theme.fontWeight.light
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoBlackWoff, ttf: RobotoBlackTtf, svg: RobotoBlackSvg
    },
    theme.fontWeight.black
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoBoldWoff, ttf: RobotoBoldTtf, svg: RobotoBoldSvg
    },
    theme.fontWeight.extrabold
  )};
  ${fontfaceMixin(
    theme.fontFamily.roboto, {
      woff: RobotoThinWoff, ttf: RobotoThinTtf, svg: RobotoThinSvg
    },
    theme.fontWeight.ultraLight
  )};

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
    font-family: 'ShadowsInto', sans-serif;
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
