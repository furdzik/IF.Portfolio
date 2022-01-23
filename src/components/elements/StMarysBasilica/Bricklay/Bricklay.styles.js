import styled from '@emotion/styled';
import { css } from '@emotion/react';

// import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

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
      z-index: 3;
      width: 1px;
      height: 100%;
      background: #e7e7d6;
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
      top: 0;
      right: 100%;
      z-index: 1;
      transform: rotate(-10deg);
      transform-origin: right;
      width: .5px;
      height: ${brickHeight}px;
      background: #c1c099;
    }
  }
  &:nth-of-type(1), &:nth-of-type(11), &:nth-of-type(21) {
    width: 1px;
    &::before {
      transform: rotate(-5deg);
      width: 1.5px;
    }
  }
  &:nth-of-type(2), &:nth-of-type(12), &:nth-of-type(22) {
    width: 2.5px;
    &::before {
      width: 2px;
    }
  }
  &:nth-of-type(3), &:nth-of-type(13), &:nth-of-type(23) {
    width: 2px;
    &::before {
      width: 2px;
    }
  }
  &:nth-of-type(4), &:nth-of-type(14), &:nth-of-type(24) {
    height: .8px;
    &::before {
      width: 1.5px;
      height: .8px;
    }
  }
  &:nth-of-type(5), &:nth-of-type(15), &:nth-of-type(25) {
    width: 1.5px;
    &::before {
      width: 2px;
    }
  }
  &:nth-of-type(6), &:nth-of-type(16), &:nth-of-type(26) {
    width: 2px;
  }
  &:nth-of-type(7), &:nth-of-type(17), &:nth-of-type(27) {
    width: 1.5px;
    &::before {
      width: 2.2px;
    }
  }
  &:nth-of-type(8), &:nth-of-type(18), &:nth-of-type(28) {
    width: 1.7px;
    &::before {
      width: 1.7px;
    }
  }
  &:nth-of-type(9), &:nth-of-type(19), &:nth-of-type(29) {
    width: .5px;
    &::before {
      width: .7px;
    }
  }
  &:nth-of-type(10), &:nth-of-type(20), &:nth-of-type(30) {
    width: 1.3px;
    &::before {
      width: .7px;
    }
  }
`;

export {
  BricklayWrapper,
  BrickWrapper,
  Brick
};
