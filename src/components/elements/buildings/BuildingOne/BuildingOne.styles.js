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
  transform: translateX(-50%);
  width: 80%;
  height: 29px;
  border-bottom: 0;
  z-index: 2;
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
    display: block;
    background: #4c4751;
    height: 2px;
    bottom: 3.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    z-index: 2;
  }
  &::after {
    content: '';
    display: block;
    border-color: #7c0f16 transparent;
    border-width: 3.5px 5px 0;
    border-style: solid;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 130%;
    height: 0;
    z-index: 2;
  }
  > span {
    &:nth-of-type(1) {
      border-bottom: 2px solid #73687d;
      width: 50px;
      height: 27px;
      border-radius: 65%;
      transform: rotate(-31deg);
      z-index: 0;
      left: -19px;
      bottom: 8.5px;
    }
    &:nth-of-type(2) {
      border-bottom: 2px solid #73687d;
      width: 50px;
      height: 27px;
      border-radius: 65%;
      transform: rotate(31deg);
      z-index: 0;
      right: -19px;
      bottom: 8.5px;
    }
    &:nth-of-type(3) {
      border-width: 0 25px 19px;
      border-style: solid;
      border-color: #73687d transparent;
      left: 3px;
      bottom: 5px;
      &::before {
        content: '';
        border-width: 0 3px 6px;
        border-style: solid;
        border-color: #73687d transparent;
        left: -3px;
        bottom: -2px;
      }
      &::after {
        content: '';
        background: #73687d;
        width: 6px;
        height: 5px;
        left: -3px;
        bottom: -1px;
      }
    }
    &:nth-of-type(4) {
      width: 100%;
      height: 100%;
      &::before {
        content: '';
        border-width: 0 0 3px 6px;
        border-style: solid;
        border-color: #73687d transparent;
        left: 0;
        bottom: 5px;
      }
      &::after {
        content: '';
        border-width: 0 6px 3px 0;
        border-style: solid;
        border-color: #73687d transparent;
        right: 0;
        bottom: 5px;
      }
    }
    &:nth-of-type(5) {
      width: 1px;
      height: 24px;
      background: #5c5563;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      &::before {
        content: '';
        width: 1px;
        height: 19px;
        background: #5c5563;
        left: -6.8px;
        bottom: 0;
      }
      &::after {
        content: '';
        width: 1px;
        height: 19px;
        background: #5c5563;
        right: -6.8px;
        bottom: 0;
      }
    }
    &:nth-of-type(6) {
      width: 1px;
      height: 9px;
      background: #5c5563;
      left: 6.8px;
      bottom: 0;
      &::before {
        content: '';
        width: 1px;
        height: 7px;
        background: #5c5563;
        left: -6.8px;
        bottom: 0;
      }
      &::after {
        content: '';
        width: 1px;
        height: 13px;
        background: #5c5563;
        right: -6.8px;
        bottom: 0;
      }
    }
    &:nth-of-type(7) {
      width: 1px;
      height: 9px;
      background: #5c5563;
      right: 6.8px;
      bottom: 0;
      &::before {
        content: '';
        width: 1px;
        height: 13px;
        background: #5c5563;
        left: -6.8px;
        bottom: 0;
      }
      &::after {
        content: '';
        width: 1px;
        height: 7px;
        background: #5c5563;
        right: -6.8px;
        bottom: 0;
      }
    }
    &:nth-of-type(8) {
      width: 1px;
      height: 30px;
      background: #73687d;
      left: 50%;
      bottom: 88%;
      transform: translateX(-50%);
      &::before {
        content: '';
        width: 2px;
        height: 3px;
        background: #73687d;
        left: -.5px;
        top: 0;
      }
      &::after {
        content: '';
        width: 2px;
        height: 3px;
        background: #73687d;
        left: -.5px;
        top: 5px;
      }
    }
    &:nth-of-type(9) {
      content: '';
      width: 5px;
      height: 15.4px;
      background-size: 1px 2.4px;
      background-image: linear-gradient(to bottom, #73687d 1px, transparent 1px);
      left: 50%;
      bottom: 31px;
      transform: translateX(-50%);
    }
  }
`;

const Wall = styled.span`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.monoColors.white};
  border: 1.5px solid #c31e00;
  border-bottom: 0;

  &::before {
    content: '';
    bottom: 0;
    display: block;
    border-top: 1.5px solid #c31e00;
    width: 100%;
    height: 38%;
    background: #aeb7b9;
  }
`;

const Roof = styled.span`
  ${ElementsCommonStyle};
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    display: block;
    background: #4c4751;
    height: 2px;
    bottom: 3.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    z-index: 2;
  }
  &::after {
    content: '';
    display: block;
    border-color: #7c0f16 transparent;
    border-width: 3.5px 5px 0;
    border-style: solid;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 130%;
    height: 0;
    z-index: 2;
  }
  > span {
    &:nth-of-type(1) {
      border-bottom: 2px solid #73687d;
      width: 20px;
      height: 16px;
      border-radius: 65%;
      transform: rotate(-45deg);
      z-index: 0;
      left: -17px;
      bottom: 5px;
      &::before {
        content: '';
        border-width: 4px 4px 0;
        border-style: solid;
        border-color: #73687d transparent;
        left: 6px;
        bottom: -5px;
      }
    }
    &:nth-of-type(2) {
      border-bottom: 2px solid #73687d;
      width: 20px;
      height: 16px;
      border-radius: 65%;
      transform: rotate(45deg);
      z-index: 0;
      right: -17px;
      bottom: 5px;
      &::before {
        content: '';
        border-width: 4px 4px 0;
        border-style: solid;
        border-color: #73687d transparent;
        left: 6px;
        bottom: -5px;
      }
    }
    &:nth-of-type(3) {
      width: 100%;
      height: 100%;
      background-size: 6.1px;
      background-image: linear-gradient(to right, #5c5563 1px, #73687d 1px);
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
    background: #af280f;
    width: 50%;
    height: 100%;
  }
`;

const Window = css`
  ${ElementsCommonStyleUnspecified};
  width: 8px;
  height: 12px;
  background-size: 4px 3px;
  background-image: linear-gradient(to right, #54625b .5px, transparent .5px),
    linear-gradient(to bottom, #54625b .5px, transparent .5px);
  border-right: .5px solid #54625b;
  border-bottom: .5px solid #54625b;
  bottom: calc(35% + 3px);
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
  left: -3.5px;
  right: -3px;
  height: 35%;
  border: 2px solid #af280f;
  border-left: 0;
  background-size: 8.3px;
  background-image: linear-gradient(to right, #af280f 1.5px, transparent 1.5px);
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
