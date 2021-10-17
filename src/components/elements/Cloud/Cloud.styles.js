import styled, { css } from 'styled-components';

import { cloudType } from '../../../config/constants';

import { ElementsCommonStyleUnspecified } from '../../../styles/elementsCommonStyle.styles';

const CloudTypeOneSize = css`
  width: 119px;
  height: 65px;
`;

const CloudTypeOne = css`
  &:nth-child(1) {
    border-radius: 20px 20px 20px 20px;
    height: 45px;
    left: 0;
    top: 20px;
    width: 97px;
  }
  &:nth-child(2) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 23px;
    top: 0;
    width: 50px;
  }
  &:nth-child(3) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 48px;
    top: 12px;
    width: 50px;
  }
  &:nth-child(4) {
    border-radius: 50px 50px 50px 50px;
    bottom: 0;
    height: 38px;
    right: 0;
    width: 63px;
  }
`;

const CloudTypeTwoSize = css`
  width: 92px;
  height: 51px;
`;

const CloudTypeTwo = css`
  &:nth-child(1) {
    border-radius: 20px 20px 20px 20px;
    bottom: 0;
    height: 31px;
    left: 0;
    width: 92px;
  }
  &:nth-child(2) {
    border-radius: 30px 30px 30px 30px;
    height: 30px;
    left: 14px;
    top: 8px;
    width: 30px;
  }
  &:nth-child(3) {
    border-radius: 30px 30px 30px 30px;
    height: 30px;
    left: 36px;
    top: 3px;
    width: 30px;
  }
  &:nth-child(4) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    right: 0;
    top: 11px;
    width: 40px;
  }
`;

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};

  ${(props) => props.cloudType === cloudType.one && css`
    ${CloudTypeOneSize}
  `};
   ${(props) => props.cloudType === cloudType.two && css`
    ${CloudTypeTwoSize}
  `};

  span {
    background: #F6F7F9;
    display: block;
    position: absolute;

    ${(props) => props.cloudType === cloudType.one && css`
      ${CloudTypeOne}
    `};
     ${(props) => props.cloudType === cloudType.two && css`
      ${CloudTypeTwo}
    `};
   }
`;

export {
  Wrapper
};
