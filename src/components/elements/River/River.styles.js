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
      bottom: -109px;
      left: -22px;
      transform: rotate(-36deg);
      width: 277px;
      height: 202px;
      border-radius: 65%;
      &::before {
        bottom: 147px;
        left: 175px;
        transform: rotate(-76deg);
        width: 18px;
        height: 22px;
      }
    }
    &:nth-of-type(2) {
      bottom: -16px;
      left: 63px;
      transform: rotate(-6deg);
      width: 222px;
      height: 131px;
      border-radius: 65%;
      &::before {
        bottom: 76px;
        left: 150px;
        transform: rotate(-75deg);
        width: 18px;
        height: 18px;
      }
    }
    &:nth-of-type(3) {
      bottom: 27px;
      left: 153px;
      transform: rotate(15deg);
      width: 197px;
      height: 80px;
      border-radius: 65%;
    }
    &:nth-of-type(4) {
      bottom: -74px;
      left: 214px;
      transform: rotate(50deg);
      width: 197px;
      height: 144px;
      border-radius: 65%;
    }
    &:nth-of-type(5) {
      bottom: -43px;
      left: 332px;
      transform: rotate(17deg);
      width: 265px;
      height: 147px;
      border-top: 0;
      border-bottom: 39px solid #298cef;
      border-radius: 65%;
      &::before {
        bottom: 2px;
        left: 15px;
        transform: rotate(18deg);
        width: 95px;
        height: 0;
        border-width: 12px;
      }
    }
    &:nth-of-type(6) {
      bottom: -154px;
      left: 630px;
      transform: rotate(-2deg);
      width: 408px;
      height: 215px;
      border-radius: 65%;
    }
    &:nth-of-type(7) {
      bottom: -35px;
      left: 958px;
      transform: rotate(11deg);
      width: 265px;
      height: 104px;
      border-top: 0;
      border-bottom: 39px solid #298cef;
      border-radius: 65%;
      &::before {
        bottom: -28px;
        left: -22px;
        transform: rotate(15deg);
        width: 95px;
        height: 0;
        border-width: 12px;
      }
    }
  }
`;

const Arakawa = styled.div`
  ${ElementsCommonStyleUnspecified};
  left: 61%;
  width: 352px;
  height: 100%;

  span {
    ${ElementsCommonStyleUnspecified};
    bottom: 0;
    &::before, &::after {
      content: '';
    }

    &:nth-of-type(1) {
      bottom: -216px;
      left: -102px;
      transform: rotate(21deg);
      width: 721px;
      height: 542px;
      border-radius: 50% 50% 0 0;
      background: #e1e1e1;
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
        bottom: 0;
        left: 207px;
        width: 102px;
        height: 174px;
        background: #3785d3;
      }
    }
    &:nth-of-type(3) {
      bottom: -168px;
      left: -9px;
      transform: rotate(-7deg);
      width: 383px;
      height: 483px;
      border-left: 37px solid #2d393e;
      border-radius: 65%;
      &::before {
        bottom: 323px;
        left: 24px;
        transform: rotate(43deg);
        width: 59px;
        height: 155px;
        border-left: 22px solid #2d393e;
        border-radius: 33%;
      }
      &::after {
        bottom: 355px;
        left: 96px;
        transform: rotate(91deg);
        width: 97px;
        height: 159px;
        border-left: 28px solid #2d393e;
        border-radius: 50%;
      }
    }
    &:nth-of-type(4) {
      bottom: 189px;
      left: 15px;
      width: 255px;
      height: 136px;
      &::before {
        bottom: 94px;
        left: 118px;
        width: 0;
        height: 29px;
        border-left: 87px solid #2d393e;
        border-radius: 22px 0 0;
      }
    }
    &:nth-of-type(5) {
      bottom: -165px;
      left: 254px;
      transform: rotate(-35deg);
      width: 252px;
      height: 539px;
      border-left: 80px solid #7c9ca9;
      border-radius: 65%;
      &::before {
        bottom: 97px;
        left: -19px;
        transform: rotate(-19deg);
        width: 0;
        height: 258px;
        border-left: 57px solid #7c9ca9;
      }
    }
    &:nth-of-type(6) {
      bottom: -198px;
      left: 251px;
      transform: rotate(-38deg);
      width: 139px;
      height: 534px;
      &::before {
        bottom: -15px;
        left: 23px;
        width: 175%;
        height: 100%;
        border-left: 2px solid #5b7681;
        border-radius: 65%;
      }
      &::after {
        bottom: -15px;
        left: 43px;
        transform: rotate(-5deg);
        width: 175%;
        height: 100%;
        border-left: 2px solid #5b7681;
        border-radius: 65%;
      }
    }
    &:nth-of-type(7) {
      bottom: -198px;
      left: 251px;
      transform: rotate(-38deg);
      width: 139px;
      height: 534px;
      &::before {
        bottom: -15px;
        left: 64px;
        transform: rotate(-7deg);
        width: 175%;
        height: 100%;
        border-left: 2px solid #5b7681;
        border-radius: 65%;
      }
      &::after {
        bottom: -15px;
        left: 85px;
        transform: rotate(-9deg);
        width: 175%;
        height: 100%;
        border-left: 2px solid #5b7681;
        border-radius: 65%;
      }
    }
    &:nth-of-type(8) {
      bottom: 267px;
      left: 222px;
      transform: rotate(-13deg);
      width: 40px;
      height: 70px;
      border-radius: 50%;
      background: #e1e1e1;
    }
  }
`;

export {
  Wrapper,
  Vistula,
  Arakawa
};
