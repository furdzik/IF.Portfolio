import { createGlobalStyle } from 'styled-components';
import _map from 'lodash/map';

import ShadowIntoWoff from '../assets/fonts/ShadowsIntoLightTwo-Regular.woff';
import ShadowIntoTtf from '../assets/fonts/ShadowsIntoLightTwo-Regular.ttf';
import ShadowIntoSvg from '../assets/fonts/ShadowsIntoLightTwo-Regular.svg';

import RobotoRegularWoff from '../assets/fonts/Roboto-Regular.woff';
import RobotoRegularTtf from '../assets/fonts/Roboto-Regular.ttf';
import RobotoRegularSvg from '../assets/fonts/Roboto-Regular.svg';

import RobotoMediumWoff from '../assets/fonts/Roboto-Medium.woff';
import RobotoMediumTtf from '../assets/fonts/Roboto-Medium.ttf';
import RobotoMediumSvg from '../assets/fonts/Roboto-Medium.svg';

import RobotoLightWoff from '../assets/fonts/Roboto-Light.woff';
import RobotoLightTtf from '../assets/fonts/Roboto-Light.ttf';
import RobotoLightSvg from '../assets/fonts/Roboto-Light.svg';

import RobotoBlackWoff from '../assets/fonts/Roboto-Black.woff';
import RobotoBlackTtf from '../assets/fonts/Roboto-Black.ttf';
import RobotoBlackSvg from '../assets/fonts/Roboto-Black.svg';

import RobotoBoldWoff from '../assets/fonts/Roboto-Bold.woff';
import RobotoBoldTtf from '../assets/fonts/Roboto-Bold.ttf';
import RobotoBoldSvg from '../assets/fonts/Roboto-Bold.svg';

import RobotoThinWoff from '../assets/fonts/Roboto-Thin.woff';
import RobotoThinTtf from '../assets/fonts/Roboto-Thin.ttf';
import RobotoThinSvg from '../assets/fonts/Roboto-Thin.svg';

import { breakpointMixin, fontfaceMixin } from './mixins';

import { typography, colors } from './basic';

const baseFontFamily = _map(typography.fontFamily, (el) => `${el}`).join(', ');

const GlobalStyles = createGlobalStyle`

  ${fontfaceMixin(
    typography.fontFamily.shadowsInto, {
      woff: ShadowIntoWoff, ttf: ShadowIntoTtf, svg: ShadowIntoSvg
    },
    (props) => props.theme.fontWeight.regular
  )};

  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoRegularWoff, ttf: RobotoRegularTtf, svg: RobotoRegularSvg
    },
    (props) => props.theme.fontWeight.regular
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoMediumWoff, ttf: RobotoMediumTtf, svg: RobotoMediumSvg
    },
    (props) => props.theme.fontWeight.medium
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoLightWoff, ttf: RobotoLightTtf, svg: RobotoLightSvg
    },
    (props) => props.theme.fontWeight.medium
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoLightWoff, ttf: RobotoLightTtf, svg: RobotoLightSvg
    },
    (props) => props.theme.fontWeight.light
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoBlackWoff, ttf: RobotoBlackTtf, svg: RobotoBlackSvg
    },
    (props) => props.theme.fontWeight.black
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoBoldWoff, ttf: RobotoBoldTtf, svg: RobotoBoldSvg
    },
    (props) => props.theme.fontWeight.extrabold
  )};
  ${fontfaceMixin(
    typography.fontFamily.roboto, {
      woff: RobotoThinWoff, ttf: RobotoThinTtf, svg: RobotoThinSvg
    },
    (props) => props.theme.fontWeight.ultraLight
  )};

  @font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/Roboto-Thin.woff') format('woff'),
        url('../assets/fonts/Roboto-Thin.ttf') format('truetype'),
        url('../assets/fonts/Roboto-Thin.svg#Roboto-Thin') format('svg');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

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
    background: ${(props) => props.theme.layout.background};
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
  h4,
  h5,
  h6 {
    font-family: 'ShadowsInto', sans-serif;
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
  .root {
    height: 100%;
  }
`;

export { GlobalStyles };
