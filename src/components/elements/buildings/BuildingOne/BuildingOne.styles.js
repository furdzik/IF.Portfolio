import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle, ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 70px;
  height: 220px;
`;

const Base = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 2px;
  background: #3b2d22;
`;

const FirstFloor = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
`;

const FirstRoof = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 31px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 8px;
`;

const SecondFloor = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 39px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
`;

const SecondRoof = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 68px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 10px;
`;

const ThirdFloor = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 78px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
`;

const ThirdRoof = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 107px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 11px;
`;

const FourthFloor = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 118px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
`;

const FourthRoof = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 147px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 12px;
`;

const FifthFloor = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 159px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
  border-bottom: 0;
`;

const FifthRoof = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 188px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 32px;
`;

const MainRoof = styled.span`
  ${ElementsCommonStyle};
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    bottom: 3.5px;
    left: 50%;
    z-index: 2;
    display: block;
    transform: translateX(-50%);
    width: 140%;
    height: 2px;
    background: #4c4751;
  }
  &::after {
    content: '';
    bottom: 0;
    left: 50%;
    z-index: 2;
    display: block;
    transform: translateX(-50%);
    width: 130%;
    height: 0;
    border-width: 3.5px 5px 0;
    border-style: solid;
    border-color: #7c0f16 transparent;
  }
  > span {
    &:nth-of-type(1) {
      bottom: 8.5px;
      left: -19px;
      z-index: 0;
      transform: rotate(-31deg);
      width: 50px;
      height: 27px;
      border-bottom: 2px solid #73687d;
      border-radius: 65%;
    }
    &:nth-of-type(2) {
      right: -19px;
      bottom: 8.5px;
      z-index: 0;
      transform: rotate(31deg);
      width: 50px;
      height: 27px;
      border-bottom: 2px solid #73687d;
      border-radius: 65%;
    }
    &:nth-of-type(3) {
      bottom: 5px;
      left: 3px;
      border-width: 0 25px 19px;
      border-style: solid;
      border-color: #73687d transparent;
      &::before {
        content: '';
        bottom: -2px;
        left: -3px;
        border-width: 0 3px 6px;
        border-style: solid;
        border-color: #73687d transparent;
      }
      &::after {
        content: '';
        bottom: -1px;
        left: -3px;
        width: 6px;
        height: 5px;
        background: #73687d;
      }
    }
    &:nth-of-type(4) {
      width: 100%;
      height: 100%;
      &::before {
        content: '';
        bottom: 5px;
        left: 0;
        border-width: 0 0 3px 6px;
        border-style: solid;
        border-color: #73687d transparent;
      }
      &::after {
        content: '';
        right: 0;
        bottom: 5px;
        border-width: 0 6px 3px 0;
        border-style: solid;
        border-color: #73687d transparent;
      }
    }
    &:nth-of-type(5) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 24px;
      background: #5c5563;
      &::before {
        content: '';
        bottom: 0;
        left: -6.8px;
        width: 1px;
        height: 19px;
        background: #5c5563;
      }
      &::after {
        content: '';
        right: -6.8px;
        bottom: 0;
        width: 1px;
        height: 19px;
        background: #5c5563;
      }
    }
    &:nth-of-type(6) {
      bottom: 0;
      left: 6.8px;
      width: 1px;
      height: 9px;
      background: #5c5563;
      &::before {
        content: '';
        bottom: 0;
        left: -6.8px;
        width: 1px;
        height: 7px;
        background: #5c5563;
      }
      &::after {
        content: '';
        right: -6.8px;
        bottom: 0;
        width: 1px;
        height: 13px;
        background: #5c5563;
      }
    }
    &:nth-of-type(7) {
      right: 6.8px;
      bottom: 0;
      width: 1px;
      height: 9px;
      background: #5c5563;
      &::before {
        content: '';
        bottom: 0;
        left: -6.8px;
        width: 1px;
        height: 13px;
        background: #5c5563;
      }
      &::after {
        content: '';
        right: -6.8px;
        bottom: 0;
        width: 1px;
        height: 7px;
        background: #5c5563;
      }
    }
    &:nth-of-type(8) {
      bottom: 88%;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 30px;
      background: #73687d;
      &::before {
        content: '';
        top: 0;
        left: -.5px;
        width: 2px;
        height: 3px;
        background: #73687d;
      }
      &::after {
        content: '';
        top: 5px;
        left: -.5px;
        width: 2px;
        height: 3px;
        background: #73687d;
      }
    }
    &:nth-of-type(9) {
      content: '';
      bottom: 31px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 15.4px;
      background-image: linear-gradient(to bottom, #73687d 1px, transparent 1px);
      background-size: 1px 2.4px;
    }
  }
`;

const Wall = styled.span`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
  border: 1.5px solid #c31e00;
  border-bottom: 0;
  background: ${(props) => props.theme.monoColors.white};

  &::before {
    content: '';
    bottom: 0;
    display: block;
    width: 100%;
    height: 38%;
    border-top: 1.5px solid #c31e00;
    background: #aeb7b9;
  }
`;

const Roof = styled.span`
  ${ElementsCommonStyle};
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    bottom: 3.5px;
    left: 50%;
    z-index: 2;
    display: block;
    transform: translateX(-50%);
    width: 140%;
    height: 2px;
    background: #4c4751;
  }
  &::after {
    content: '';
    bottom: 0;
    left: 50%;
    z-index: 2;
    display: block;
    transform: translateX(-50%);
    width: 130%;
    height: 0;
    border-width: 3.5px 5px 0;
    border-style: solid;
    border-color: #7c0f16 transparent;
  }
  > span {
    &:nth-of-type(1) {
      bottom: 5px;
      left: -17px;
      z-index: 0;
      transform: rotate(-45deg);
      width: 20px;
      height: 16px;
      border-bottom: 2px solid #73687d;
      border-radius: 65%;
      &::before {
        content: '';
        bottom: -5px;
        left: 6px;
        border-width: 4px 4px 0;
        border-style: solid;
        border-color: #73687d transparent;
      }
    }
    &:nth-of-type(2) {
      right: -17px;
      bottom: 5px;
      z-index: 0;
      transform: rotate(45deg);
      width: 20px;
      height: 16px;
      border-bottom: 2px solid #73687d;
      border-radius: 65%;
      &::before {
        content: '';
        bottom: -5px;
        left: 6px;
        border-width: 4px 4px 0;
        border-style: solid;
        border-color: #73687d transparent;
      }
    }
    &:nth-of-type(3) {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #5c5563 1px, #73687d 1px);
      background-size: 6.1px;
    }
  }
`;

const Door = styled.span`
  ${ElementsCommonStyle};
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 24px;
  background: #c31e00;

  &::before {
    content: '';
    display: block;
    width: 50%;
    height: 100%;
    background: #af280f;
  }
`;

const Window = css`
  ${ElementsCommonStyleUnspecified};
  bottom: calc(35% + 3px);
  width: 9px;
  height: 13px;
  border-right: .5px solid #54625b;
  border-bottom: .5px solid #54625b;
  background-image: linear-gradient(to right, #54625b .6px, transparent .6px),
    linear-gradient(to bottom, #54625b .6px, transparent .6px);
  background-size: 4px 3px;
`;

const OneWindow = styled.span`
  ${Window};
  left: 6px;
`;

const SecondWindow = styled.span`
  ${Window};
  right: 6px;
`;

const Balustrade = styled.span`
  ${ElementsCommonStyle};
  right: -3px;
  left: -3.5px;
  height: 35%;
  border: 2px solid #af280f;
  border-left: 0;
  background-image: linear-gradient(to right, #af280f 1.5px, transparent 1.5px);
  background-size: 8.3px;
`;

export {
  Wrapper,
  Base,
  FirstFloor,
  FirstRoof,
  SecondFloor,
  SecondRoof,
  ThirdFloor,
  ThirdRoof,
  FourthFloor,
  FourthRoof,
  FifthFloor,
  FifthRoof,
  MainRoof,
  Wall,
  Roof,
  Door,
  OneWindow,
  SecondWindow,
  Balustrade
};
