import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 245rem;
  height: 41rem;
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

const Arakawa = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 352px;
  height: 100%;
  left: 61%;

  span {
    ${ElementsCommonStyleUnspecified};
    bottom: 0;
    &::before, &::after {
      content: '';
    }

    &:nth-of-type(1) {
      width: 721px;
      height: 542px;
      border-radius: 50% 50% 0 0;
      background: #e1e1e1;
      left: -102px;
      bottom: -216px;
      transform: rotate(21deg);
    }
    &:nth-of-type(2) {
      bottom: -60px;
      left: 11px;
      width: 300px;
      height: 350px;
      &::before {
        width: 233px;
        height: 100%;
        border-radius: 147px 66px 0 0;
        background: #3785d3;
      }
      &::after {
        left: 207px;
        bottom: 0;
        width: 102px;
        height: 174px;
        background: #3785d3;
      }
    }
    &:nth-of-type(3) {
      width: 383px;
      height: 483px;
      border-radius: 65%;
      bottom: -168px;
      left: -9px;
      border-left: 37px solid #2d393e;
      transform: rotate(-7deg);
      &::before {
        width: 59px;
        height: 155px;
        border-radius: 33%;
        bottom: 323px;
        left: 24px;
        border-left: 22px solid #2d393e;
        transform: rotate(43deg);
      }
      &::after {
        width: 97px;
        height: 159px;
        border-radius: 50%;
        bottom: 355px;
        left: 96px;
        border-left: 28px solid #2d393e;
        transform: rotate(91deg);
      }
    }
    &:nth-of-type(4) {
      width: 255px;
      height: 136px;
      bottom: 189px;
      left: 15px;
      &::before {
        width: 0;
        height: 29px;
        border-radius: 22px 0 0 0;
        border-left: 87px solid #2d393e;
        bottom: 94px;
        left: 118px;
      }
      &::after {

      }
    }
    &:nth-of-type(5) {
      width: 252px;
      height: 539px;
      border-radius: 65%;
      bottom: -165px;
      left: 254px;
      border-left: 80px solid #7c9ca9;
      transform: rotate(-35deg);
      &::before {
        bottom: 97px;
        left: -19px;
        width: 0;
        border-left: 57px solid #7c9ca9;
        height: 258px;
        transform: rotate(-19deg);
      }
    }
    &:nth-of-type(6) {
      width: 139px;
      height: 534px;
      left: 251px;
      bottom: -198px;
      transform: rotate(-38deg);
      &::before {
        width: 175%;
        height: 100%;
        left: 23px;
        bottom: -15px;
        border-radius: 65%;
        border-left: 2px solid #5b7681;
      }
      &::after {
        width: 175%;
        height: 100%;
        left: 43px;
        bottom: -15px;
        border-radius: 65%;
        border-left: 2px solid #5b7681;
        transform: rotate(-5deg);
      }
    }
    &:nth-of-type(7) {
      width: 139px;
      height: 534px;
      left: 251px;
      bottom: -198px;
      transform: rotate(-38deg);
      &::before {
        width: 175%;
        height: 100%;
        left: 64px;
        bottom: -15px;
        border-radius: 65%;
        border-left: 2px solid #5b7681;
        transform: rotate(-7deg);
      }
      &::after {
        width: 175%;
        height: 100%;
        left: 85px;
        bottom: -15px;
        border-radius: 65%;
        border-left: 2px solid #5b7681;
        transform: rotate(-9deg);
      }
    }
    &:nth-of-type(8) {
      width: 40px;
      height: 70px;
      background: #e1e1e1;
      left: 222px;
      bottom: 267px;
      border-radius: 50%;
      transform: rotate(-13deg);
    }
  }
`;

export {
  Wrapper,
  Vistula,
  Arakawa
};
