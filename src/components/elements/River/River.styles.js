import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 245rem;
  height: 41rem;
  z-index: 2;
`;

const Vistula = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 48%;
  height: 100%;

  span {
    ${ElementsCommonStyleUnspecified};
    bottom: 0;

    &, &::before, &::after {
      border-top: 39px solid #298cef;
    }
    &::before, &::after {
      content: '';
    }

    &:nth-of-type(1) {
      width: 277px;
      height: 202px;
      border-radius: 65%;
      bottom: -109px;
      left: -22px;
      transform: rotate(-36deg);
      &::before {
        width: 18px;
        height: 22px;
        bottom: 147px;
        left: 175px;
        transform: rotate(-76deg);
      }
    }
    &:nth-of-type(2) {
      width: 222px;
      height: 131px;
      border-radius: 65%;
      bottom: -16px;
      left: 63px;
      transform: rotate(-6deg);
      &::before {
        width: 18px;
        height: 18px;
        bottom: 76px;
        left: 150px;
        transform: rotate(-75deg);
      }
    }
    &:nth-of-type(3) {
      width: 197px;
      height: 80px;
      border-radius: 65%;
      bottom: 27px;
      left: 153px;
      transform: rotate(15deg);
    }
    &:nth-of-type(4) {
      width: 197px;
      height: 144px;
      border-radius: 65%;
      bottom: -74px;
      left: 214px;
      transform: rotate(50deg);
    }
    &:nth-of-type(5) {
      width: 265px;
      height: 147px;
      border-radius: 65%;
      bottom: -43px;
      left: 332px;
      transform: rotate(17deg);
      border-top: 0;
      border-bottom: 39px solid #298cef;
      &::before {
        width: 95px;
        border-width: 12px;
        height: 0;
        bottom: 2px;
        left: 15px;
        transform: rotate(18deg);
      }
    }
    &:nth-of-type(6) {
      width: 408px;
      height: 215px;
      border-radius: 65%;
      bottom: -154px;
      left: 630px;
      transform: rotate(-2deg);
    }
    &:nth-of-type(7) {
      width: 265px;
      height: 104px;
      border-radius: 65%;
      bottom: -35px;
      left: 958px;
      transform: rotate(11deg);
      border-top: 0;
      border-bottom: 39px solid #298cef;
      &::before {
        width: 95px;
        border-width: 12px;
        height: 0;
        bottom: -28px;
        left: -22px;
        transform: rotate(15deg);
      }
    }
  }

`;

export {
  Wrapper,
  Vistula
};
