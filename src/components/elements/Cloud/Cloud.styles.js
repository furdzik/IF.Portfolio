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

const CloudTypeThreeSize = css`
  width: 149px;
  height: 95px;
`;

const CloudTypeThree = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 54px;
    left: 0;
    width: 150px;
  }
  &:nth-child(2) {
    border-radius: 71px 71px 71px 71px;
    height: 71px;
    left: -4px;
    top: 24px;
    width: 71px;
  }
  &:nth-child(3) {
    border-radius: 70px 70px 70px 70px;
    height: 70px;
    left: 26px;
    top: 3px;
    width: 70px;
  }
  &:nth-child(4) {
    border-radius: 60px 60px 60px 60px;
    height: 60px;
    right: 12px;
    top: 11px;
    width: 60px;
  }
`;

const CloudTypeFourSize = css`
  width: 126px;
  height: 84px;
`;

const CloudTypeFour = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 47px;
    left: 0;
    width: 126px;
  }
  &:nth-child(2) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    left: 13px;
    top: 14px;
    width: 40px;
  }
  &:nth-child(3) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    left: 38px;
    top: 10px;
    width: 40px;
  }
  &:nth-child(4) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    right: 21px;
    top: 19px;
    width: 40px;
  }
`;

const CloudTypeFiveSize = css`
    height: 95px;
    width: 141px;
`;

const CloudTypeFive = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 63px;
    left: 0;
    width: 141px;
  }
  &:nth-child(2) {
    border-radius: 70px 70px 70px 70px;
    height: 70px;
    left: 24px;
    top: 0;
    width: 70px;
  }
  &:nth-child(3) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    right: 11px;
    top: 14px;
    width: 50px;
  }
`;

const CloudTypeSixSize = css`
  height: 54px;
  width: 86px;
`;

const CloudTypeSix = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 35px;
    left: 0;
    width: 86px;
  }
  &:nth-child(2) {
    border-radius: 30px 30px 30px 30px;
    height: 30px;
    left: 8px;
    top: 6px;
    width: 30px;
  }
  &:nth-child(3) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    left: 32px;
    top: 3px;
    width: 40px;
  }
`;

const CloudTypeSevenSize = css`
  height: 65px;
  width: 114px;
`;

const CloudTypeSeven = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 40px;
    left: 0;
    width: 114px;
  }
  &:nth-child(2) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    right: 8px;
    top: 10px;
    width: 40px;
  }
  &:nth-child(3) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    left: 8px;
    top: 10px;
    width: 40px;
  }
  &:nth-child(4) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 32px;
    top: 0;
    width: 50px;
  }
`;

const CloudTypeEightSize = css`
  height: 70px;
  width: 162px;
`;

const CloudTypeEight = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 45px;
    left: 0;
    width: 162px;
  }
  &:nth-child(2) {
    border-radius: 70px 70px 70px 70px;
    height: 70px;
    right: -7px;
    top: 0;
    width: 70px;
  }
  &:nth-child(3) {
    border-radius: 60px 60px 60px 60px;
    height: 60px;
    left: 22px;
    top: 2px;
    width: 60px;
  }
  &:nth-child(4) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 65px;
    top: -8px;
    width: 50px;
  }
`;

const CloudTypeNineSize = css`
  height: 60px;
  width: 126px;
`;

const CloudTypeNine = css`
  &:nth-child(1) {
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    height: 45px;
    left: 0;
    width: 126px;
  }
  &:nth-child(2) {
    border-radius: 40px 40px 40px 40px;
    height: 40px;
    right: 3px;
    top: -4px;
    width: 40px
  }
  &:nth-child(3) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 15px;
    top: 0;
    width: 50px;
  }
  &:nth-child(4) {
    border-radius: 50px 50px 50px 50px;
    height: 50px;
    left: 47px;
    top: -14px;
    width: 50px;
  }
`;

const CloudTypeTenSize = css`
  height: 51px;
  width: 92px;
`;

const CloudTypeTen = css`
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

const SmallCloudSize = css`
  width: 80px;
  height: 45px;
  z-index: 1;
`;

const SmallCloud = css`
  display: block;
  position: absolute;

  &:nth-child(1) {
    border-radius: 20px 20px 20px 20px;
    height: 25px;
    left: 0;
    bottom: 0;
    width: 80px;
  }
  &:nth-child(2) {
    border-radius: 20px 20px 20px 20px;
    height: 30px;
    left: 0;
    bottom: 0;
    width: 30px;
  }
  &:nth-child(3) {
    border-radius: 37px;
    height: 37px;
    left: 22px;
    bottom: 3px;
    width: 37px;
  }
  &:nth-child(4) {
    border-radius: 30px;
    height: 30px;
    left: 50px;
    bottom: 0;
    width: 30px;
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
    ${CloudTypeOneSize}
  `};
   ${(props) => props.cloudType === cloudType.two && css`
    ${CloudTypeTwoSize}
  `};
   ${(props) => props.cloudType === cloudType.three && css`
    ${CloudTypeThreeSize}
  `};
  ${(props) => props.cloudType === cloudType.four && css`
    ${CloudTypeFourSize}
  `};
  ${(props) => props.cloudType === cloudType.five && css`
    ${CloudTypeFiveSize}
  `};
  ${(props) => props.cloudType === cloudType.six && css`
    ${CloudTypeSixSize}
  `};
  ${(props) => props.cloudType === cloudType.seven && css`
    ${CloudTypeSevenSize}
  `};
  ${(props) => props.cloudType === cloudType.eight && css`
    ${CloudTypeEightSize}
  `};
  ${(props) => props.cloudType === cloudType.nine && css`
    ${CloudTypeNineSize}
  `};
  ${(props) => props.cloudType === cloudType.ten && css`
    ${CloudTypeTenSize}
  `};
  ${(props) => props.cloudType === cloudType.eleven && css`
    ${CloudTypeElevenSize}
  `};
  ${(props) => props.cloudType === cloudType.twelve && css`
    ${CloudTypeTwelveSize}
  `};
  ${(props) => props.cloudType === cloudType.thirteen && css`
    ${CloudTypeThirteenSize}
  `};
  ${(props) => props.cloudType === cloudType.fourteen && css`
    ${CloudTypeFourteenSize}
  `};
  ${(props) => props.cloudType === cloudType.fifteen && css`
    ${CloudTypeFifteenSize}
  `};
  ${(props) => props.cloudType === cloudType.sixteen && css`
    ${CloudTypeSixteenSize}
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
     ${(props) => props.cloudType === cloudType.three && css`
      ${CloudTypeThree}
    `};
     ${(props) => props.cloudType === cloudType.four && css`
      ${CloudTypeFour}
    `};
     ${(props) => props.cloudType === cloudType.five && css`
      ${CloudTypeFive}
    `};
     ${(props) => props.cloudType === cloudType.six && css`
      ${CloudTypeSix}
    `};
     ${(props) => props.cloudType === cloudType.seven && css`
      ${CloudTypeSeven}
    `};
     ${(props) => props.cloudType === cloudType.eight && css`
      ${CloudTypeEight}
    `};
     ${(props) => props.cloudType === cloudType.nine && css`
      ${CloudTypeNine}
    `};
     ${(props) => props.cloudType === cloudType.ten && css`
      ${CloudTypeTen}
    `};
    ${(props) => props.cloudType === cloudType.eleven && css`
      ${CloudTypeEleven}
    `};
     ${(props) => props.cloudType === cloudType.twelve && css`
      ${CloudTypeTwelve}
    `};
     ${(props) => props.cloudType === cloudType.thirteen && css`
      ${CloudTypeThirteen}
    `};
     ${(props) => props.cloudType === cloudType.fourteen && css`
      ${CloudTypeFourteen}
    `};
     ${(props) => props.cloudType === cloudType.fifteen && css`
      ${CloudTypeFifteen}
    `};
     ${(props) => props.cloudType === cloudType.sixteen && css`
      ${CloudTypeSixteen}
    `};
   }

`;

export {
  Wrapper
};
