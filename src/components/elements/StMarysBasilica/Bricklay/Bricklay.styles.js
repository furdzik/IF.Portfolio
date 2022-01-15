import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const brickHeight = 1.1;

const BricklayWrapper = styled.span`
  width: 3.6px;
  height: ${(props) => props.long * brickHeight}px;

  div, span, *::before, *::after {
    position: relative;
  }

  ${(props) => props.flip && css`
    transform: scaleX(-1);
  `};
`;

const BrickWrapper = styled.span`
  position: static;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  && {
    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
    }
    &::before {
      left: 50%;
      width: 1px;
      height: 100%;
      background: #e7e7d6;
      z-index: 3;
    }
    &::after {
      left: calc(50% - 1px);
      width: 1px;
      height: 100%;
      background: #c1c099;
    }
  }
`;

const Brick = styled.span`
  position: relative;
  left: 50%;
  z-index: 2;
  width: .5px;
  height: ${brickHeight}px;
  background: #e7e7d6;
  && {
    &::before {
      content: '';
      position: absolute;
      right: 100%;
      top: 0;
      width: .5px;
      height: ${brickHeight}px;
      background: #c1c099;
      transform: rotate(-10deg);
      transform-origin: right;
      z-index: 1;
    }
  }
  // 7/25
  &:nth-of-type(1) {
    width: 1px;
    &::before {
      width: 1.5px;
      transform: rotate(-5deg);
    }
  }
  &:nth-of-type(2) {
    width: 2.5px;
    &::before {
      width: 2px;
    }
  }
  &:nth-of-type(3) {
    width: 2px;
    &::before {
      width: 2px;
    }
  }
  &:nth-of-type(4) {
    height: .8px;
    &::before {
      width: 1.5px;
      height: .8px;
    }
  }
  &:nth-of-type(5) {
    width: 1.5px;
    &::before {
        width: 2px;
    }
  }
  &:nth-of-type(6) {
    width: 1px;
    &::before {
      width: 1.5px;
    }
  }
  &:nth-of-type(6) {
    width: 2.1px;
  }
  &:nth-of-type(7) {
    width: 1.5px;
    &::before {
      width: 2.2px;
    }
  }
`;

export {
  BricklayWrapper,
  BrickWrapper,
  Brick
};
