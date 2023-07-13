import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.span`
  ${ElementsCommonStyle};

  ${(props) => props.scalex && css`
    transform: scalex(-1);
  `};
`;

const BaseWall = styled.span`
  ${ElementsCommonStyle};
  bottom: 2px;
  left: 0;
  width: 9.5px;
  height: 10.5px;
  background: #bdc2c8;
  z-index: 2;

  ${(props) => props.skew && css`
    width: 5px;
    height: 12.6px;
    transform: skewY(-26deg);
    background: #94a5a5;
  `};
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    border-bottom: .5px solid #4a5963;
    background: #556373;
  }
  &::before {
    top: -1px;
    width: calc(100% + .2px);
    margin-left: -.2px;
  }
  &::after {
    top: 50%;
  }
`;

const Roof = styled.span`
  ${ElementsCommonStyle};

  && {
    bottom: 11.5px;
  }
  span {
    &:nth-of-type(1) {
      left: -.5px;
      border-style: solid;
      border-color: #bdc2c8 transparent;
      border-width: 0 0 19px 5.5px;

      ${(props) => props.scalex && css`
        border-color: #eef3f5 transparent;
      `};
      ${(props) => props.skew && css`
        left: 0;
        border-width: 0 0 17px 5.5px;
      `};
      &::before {
        content: '';
        left: -1.2px;
        bottom: -2px;
        width: 3px;
        height: 2px;
        border-radius: 50%;
        background: #95a5a6;
        z-index: 2;
        ${(props) => props.skew && css`
          left: -1.5px;
          bottom: -1.4px;
          width: 2px;
          height: 2px;
        `};
      }
      &::after {
        content: '';
        left: -.6px;
        bottom: 0;
        width: .4px;
        height: 10px;
        background: #eef3f5;
        z-index: 1;
        ${(props) => props.skew && css`
          left: -0.3px;
          bottom: -0.3px;
          height: 8px;
        `};
      }
    }
    &:nth-of-type(2) {
      left: 4.5px;
      border-style: solid;
      border-color: #eef3f5 transparent;
      border-width: 0 5.5px 19px 0;

      ${(props) => props.scalex && css`
        border-color: #bdc2c8 transparent;
      `};
      ${(props) => props.skew && css`
        left: 5.4px;
        border-width: 0 5.5px 17px 0;
      `};
      &::before {
        content: '';
        left: -1.4px;
        bottom: 10px;
        width: 2.5px;
        height: 2.5px;
        border-radius: 50%;
        background: #cfa113;
        z-index: 2;

        ${(props) => props.skew && css`
          left: -1px;
          bottom: 7.4px;
          width: 2px;
          height: 2px;
      `};
      }
    }
    &:nth-of-type(3) {
      left: 4.3px;
      bottom: 31.2px;
      width: .2px;
      height: 5.3px;
      background: #eef3f5;

      ${(props) => props.scalex && css`
        transform: scalex(-1);
      `};
      ${(props) => props.skew && css`
        left: 5.3px;
        bottom: 26.2px;
      `};

      &:before {
        content: '';
        left: 0;
        bottom: 3px;
        border-style: solid;
        border-color: transparent #e7d667;
        border-width: 1px 0 1px 3px;
      }
    }
  }
`;

export {
  Wrapper,
  BaseWall,
  Roof
};
