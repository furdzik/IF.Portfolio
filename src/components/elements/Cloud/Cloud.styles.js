import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { cloudType } from '@constants';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const CloudTypeOneSize = css`
  width: 119px;
  height: 65px;
`;

const CloudTypeOne = css`
  &:nth-of-type(1) {
    top: 2rem;
    left: 0;
    width: 97px;
    height: 45px;
    border-radius: 2rem;
  }
  &:nth-of-type(2) {
    top: 0;
    left: 23px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
  &:nth-of-type(3) {
    top: 12px;
    left: 48px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
  &:nth-of-type(4) {
    right: 0;
    bottom: 0;
    width: 63px;
    height: 38px;
    border-radius: 5rem;
  }
`;

const CloudTypeTwoSize = css`
  width: 92px;
  height: 51px;
`;

const CloudTypeTwo = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 92px;
    height: 31px;
    border-radius: 2rem;
  }
  &:nth-of-type(2) {
    top: 8px;
    left: 14px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  &:nth-of-type(3) {
    top: 3px;
    left: 36px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  &:nth-of-type(4) {
    top: 11px;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

const CloudTypeThreeSize = css`
  width: 149px;
  height: 95px;
`;

const CloudTypeThree = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 15rem;
    height: 54px;
    border-radius: 40px;
  }
  &:nth-of-type(2) {
    top: 24px;
    left: -4px;
    width: 71px;
    height: 71px;
    border-radius: 71px;
  }
  &:nth-of-type(3) {
    top: 3px;
    left: 26px;
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  &:nth-of-type(4) {
    top: 11px;
    right: 12px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
`;

const CloudTypeFourSize = css`
  width: 126px;
  height: 84px;
`;

const CloudTypeFour = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 126px;
    height: 47px;
    border-radius: 40px;
  }
  &:nth-of-type(2) {
    top: 14px;
    left: 13px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  &:nth-of-type(3) {
    top: 10px;
    left: 38px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  &:nth-of-type(4) {
    top: 19px;
    right: 21px;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
`;

const CloudTypeFiveSize = css`
  width: 141px;
  height: 95px;
`;

const CloudTypeFive = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 141px;
    height: 63px;
    border-radius: 4rem;
  }
  &:nth-of-type(2) {
    top: 0;
    left: 24px;
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  &:nth-of-type(3) {
    top: 14px;
    right: 11px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
`;

const CloudTypeSixSize = css`
  width: 86px;
  height: 54px;
`;

const CloudTypeSix = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 86px;
    height: 35px;
    border-radius: 4rem;
  }
  &:nth-of-type(2) {
    top: 6px;
    left: 8px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  &:nth-of-type(3) {
    top: 3px;
    left: 32px;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
`;

const CloudTypeSevenSize = css`
  width: 114px;
  height: 65px;
`;

const CloudTypeSeven = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 114px;
    height: 40px;
    border-radius: 4rem;
  }
  &:nth-of-type(2) {
    top: 10px;
    right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
  &:nth-of-type(3) {
    top: 10px;
    left: 8px;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
  &:nth-of-type(4) {
    top: 0;
    left: 32px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
`;

const CloudTypeEightSize = css`
  width: 162px;
  height: 70px;
`;

const CloudTypeEight = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 162px;
    height: 45px;
    border-radius: 4rem;
  }
  &:nth-of-type(2) {
    top: 0;
    right: -7px;
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  &:nth-of-type(3) {
    top: 2px;
    left: 22px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
  &:nth-of-type(4) {
    top: -8px;
    left: 65px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
`;

const CloudTypeNineSize = css`
  width: 126px;
  height: 60px;
`;

const CloudTypeNine = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 126px;
    height: 45px;
    border-radius: 4rem;
  }
  &:nth-of-type(2) {
    top: -4px;
    right: 3px;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
  &:nth-of-type(3) {
    top: 0;
    left: 15px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
  &:nth-of-type(4) {
    top: -14px;
    left: 47px;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
`;

const CloudTypeTenSize = css`
  width: 92px;
  height: 51px;
`;

const CloudTypeTen = css`
  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 92px;
    height: 31px;
    border-radius: 2rem;
  }
  &:nth-of-type(2) {
    top: 8px;
    left: 14px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  &:nth-of-type(3) {
    top: 3px;
    left: 36px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  &:nth-of-type(4) {
    top: 11px;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 4rem;
  }
`;

const SmallCloudSize = css`
  z-index: 1;
  width: 80px;
  height: 45px;
`;

const SmallCloud = css`
  position: absolute;
  display: block;

  &:nth-of-type(1) {
    bottom: 0;
    left: 0;
    width: 80px;
    height: 25px;
    border-radius: 2rem;
  }
  &:nth-of-type(2) {
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 2rem;
  }
  &:nth-of-type(3) {
    bottom: 3px;
    left: 22px;
    width: 37px;
    height: 37px;
    border-radius: 37px;
  }
  &:nth-of-type(4) {
    bottom: 0;
    left: 5rem;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;

const CloudTypeElevenSize = css`
  ${SmallCloudSize};
`;

const CloudTypeEleven = css`
  ${SmallCloud};
  background: #ace6e7;
`;

const CloudTypeTwelveSize = css`
  ${SmallCloudSize};
`;

const CloudTypeTwelve = css`
  ${SmallCloud};
  background: #aae6e7;
`;

const CloudTypeThirteenSize = css`
  ${SmallCloudSize};
`;

const CloudTypeThirteen = css`
  ${SmallCloud};
  background: #9bdfe1;
`;

const CloudTypeFourteenSize = css`
  ${SmallCloudSize};
`;

const CloudTypeFourteen = css`
  ${SmallCloud};
  background: #b0eaeb;
`;

const CloudTypeFifteenSize = css`
  ${SmallCloudSize};
`;

const CloudTypeFifteen = css`
  ${SmallCloud};
  background: #aae6e7;
`;

const CloudTypeSixteenSize = css`
  ${SmallCloudSize};
`;

const CloudTypeSixteen = css`
  ${SmallCloud};
  background: #aae6e7;
`;

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  z-index: 2;

  ${(props) => props.cloudType === cloudType.one && css`
    ${CloudTypeOneSize};
  `};
  ${(props) => props.cloudType === cloudType.two && css`
    ${CloudTypeTwoSize};
  `};
  ${(props) => props.cloudType === cloudType.three && css`
    ${CloudTypeThreeSize};
  `};
  ${(props) => props.cloudType === cloudType.four && css`
    ${CloudTypeFourSize};
  `};
  ${(props) => props.cloudType === cloudType.five && css`
    ${CloudTypeFiveSize};
  `};
  ${(props) => props.cloudType === cloudType.six && css`
    ${CloudTypeSixSize};
  `};
  ${(props) => props.cloudType === cloudType.seven && css`
    ${CloudTypeSevenSize};
  `};
  ${(props) => props.cloudType === cloudType.eight && css`
    ${CloudTypeEightSize};
  `};
  ${(props) => props.cloudType === cloudType.nine && css`
    ${CloudTypeNineSize};
  `};
  ${(props) => props.cloudType === cloudType.ten && css`
    ${CloudTypeTenSize};
  `};
  ${(props) => props.cloudType === cloudType.eleven && css`
    ${CloudTypeElevenSize};
  `};
  ${(props) => props.cloudType === cloudType.twelve && css`
    ${CloudTypeTwelveSize};
  `};
  ${(props) => props.cloudType === cloudType.thirteen && css`
    ${CloudTypeThirteenSize};
  `};
  ${(props) => props.cloudType === cloudType.fourteen && css`
    ${CloudTypeFourteenSize};
  `};
  ${(props) => props.cloudType === cloudType.fifteen && css`
    ${CloudTypeFifteenSize};
  `};
  ${(props) => props.cloudType === cloudType.sixteen && css`
    ${CloudTypeSixteenSize};
  `};

  span {
    position: absolute;
    display: block;
    background: #f6f7f9;

    ${(props) => props.cloudType === cloudType.one && css`
      ${CloudTypeOne};
    `};
    ${(props) => props.cloudType === cloudType.two && css`
      ${CloudTypeTwo};
    `};
    ${(props) => props.cloudType === cloudType.three && css`
      ${CloudTypeThree};
    `};
    ${(props) => props.cloudType === cloudType.four && css`
      ${CloudTypeFour};
    `};
    ${(props) => props.cloudType === cloudType.five && css`
      ${CloudTypeFive};
    `};
    ${(props) => props.cloudType === cloudType.six && css`
      ${CloudTypeSix};
    `};
    ${(props) => props.cloudType === cloudType.seven && css`
      ${CloudTypeSeven};
    `};
    ${(props) => props.cloudType === cloudType.eight && css`
      ${CloudTypeEight};
    `};
    ${(props) => props.cloudType === cloudType.nine && css`
      ${CloudTypeNine};
    `};
    ${(props) => props.cloudType === cloudType.ten && css`
      ${CloudTypeTen};
    `};
    ${(props) => props.cloudType === cloudType.eleven && css`
      ${CloudTypeEleven};
    `};
    ${(props) => props.cloudType === cloudType.twelve && css`
      ${CloudTypeTwelve};
    `};
    ${(props) => props.cloudType === cloudType.thirteen && css`
      ${CloudTypeThirteen};
    `};
    ${(props) => props.cloudType === cloudType.fourteen && css`
      ${CloudTypeFourteen};
    `};
    ${(props) => props.cloudType === cloudType.fifteen && css`
      ${CloudTypeFifteen};
    `};
    ${(props) => props.cloudType === cloudType.sixteen && css`
      ${CloudTypeSixteen};
    `};
  }
`;

export {
  Wrapper
};
