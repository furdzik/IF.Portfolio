import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Leafs from './Leafs';

const treeTrunkAndBranchColor = '#6e471c';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 16rem;

  ${(props) => props.isTaller && css`
    height: 18rem;
  `};
`;

export const Trunk = styled.span`
  ${ElementsCommonStyleUnspecified};
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 116px;

  ${(props) => props.isTaller && css`
    height: 136px;
  `};
`;

export const TrunkMain = styled.span`
  ${ElementsCommonStyleUnspecified};
  border-width: 0 5px 69px;
  border-style: solid;
  border-color: #6e471c transparent;

  ${(props) => props.isTaller && css`
    border-bottom-width: 89px;
  `};

  &&::before {
    content: '';
    bottom: -42px;
    left: -3px;
    width: 6px;
    height: 78px;
    background: ${treeTrunkAndBranchColor};

    ${(props) => props.isTaller && css`
      bottom: -55px;
      height: 91px;
    `};
  }
  &&::after {
    content: '';
    bottom: 36px;
    left: -3px;
    border-width: 0 3px 8px;
    border-style: solid;
    border-color: ${treeTrunkAndBranchColor} transparent;
  }
`;

export const BranchOne = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 7px);
    left: calc(50% - 1px);
  }
  transform: rotate(-10deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 42px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -43px;
        left: -3px;
        transform: rotate(-44deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -42px;
        right: -4px;
        transform: rotate(41deg);
        width: 1px;
        height: 6px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -33px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -35px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 8px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -15px;
        left: -3px;
        transform: rotate(-56deg);
        width: 1px;
        height: 8px;
      }
    }
  }
`;

export const BranchTwo = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 7px);
    left: calc(50% - 1px);
  }
  transform: rotate(10deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 44px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -42px;
        left: -3px;
        transform: rotate(-43deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -43px;
        right: -4px;
        transform: rotate(48deg);
        width: 1px;
        height: 8px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -31px;
        left: -3px;
        transform: rotate(-55deg);
        width: 1px;
        height: 6px;
      }
      &::after {
        top: -33px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -24px;
        left: -2px;
        transform: rotate(-52deg);
        width: 1px;
        height: 6px;
      }
      &::after {
        top: -23px;
        right: -4px;
        transform: rotate(50deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -17px;
        right: -5px;
        transform: rotate(57deg);
        width: 1px;
        height: 9px;
      }
    }
  }
`;

export const BranchThree = styled.span`
  && {
    bottom: calc(100% - 13px);
    left: calc(50% - 3px);
  }
  transform: rotate(-32deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 45px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -40px;
        left: -3px;
        transform: rotate(-38deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -44px;
        right: -5px;
        transform: rotate(43deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -30px;
        left: -3px;
        transform: rotate(-44deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -33px;
        right: -4px;
        transform: rotate(58deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -27px;
        left: -6px;
        transform: rotate(-44deg);
        width: 1px;
        height: 17px;
      }
      &::after {
        top: -27px;
        right: -5px;
        transform: rotate(65deg);
        width: 1px;
        height: 8px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -23px;
        left: -5px;
        transform: rotate(-16deg);
        width: 1px;
        height: 7px;
      }
      &::after {
        top: -16px;
        left: -5px;
        transform: rotate(79deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchFour = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 15px);
    left: calc(50% + 1px);
  }
  transform: rotate(32deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 53px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -51px;
        left: -3px;
        transform: rotate(-35deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -50px;
        right: -5px;
        transform: rotate(41deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -40px;
        left: -4px;
        transform: rotate(-66deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -43px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -14px;
        left: -2px;
        transform: rotate(-90deg);
        width: 1px;
        height: 5px;
      }
      &::after {
        top: -33px;
        right: -5px;
        transform: rotate(46deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -31px;
        left: -3px;
        transform: rotate(-63deg);
        width: 1px;
        height: 6px;
      }
      &::after {
        top: -18px;
        right: -6px;
        transform: rotate(38deg);
        width: 1.5px;
        height: 16px;
      }
    }
    &:nth-of-type(6) {
      &::before {
        top: -44.5px;
        right: -15px;
        transform: rotate(17deg);
        width: 1.5px;
        height: 29px;
      }
      &::after {
        top: -42px;
        right: -21px;
        transform: rotate(60deg);
        width: 1px;
        height: 8px;
      }
    }
    &:nth-of-type(7) {
      &::before {
        top: -43px;
        right: -16px;
        transform: rotate(-41deg);
        width: 1px;
        height: 5px;
      }
      &::after {
        top: -33px;
        right: -18px;
        transform: rotate(60deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(8) {
      &::before {
        top: -36px;
        right: -14px;
        transform: rotate(-41deg);
        width: 1px;
        height: 5px;
      }
      &::after {
        top: -24px;
        right: -16px;
        transform: rotate(64deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(9) {
      &::before {
        top: -27px;
        right: -11px;
        transform: rotate(-41deg);
        width: 1px;
        height: 6px;
      }
      &::after {
        top: -14px;
        right: -5px;
        transform: rotate(5deg);
        width: 1px;
        height: 6px;
      }
    }
  }
`;

export const BranchFive = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 28px);
    left: calc(50% - 3px);
  }
  transform: rotate(-49deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 53px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -47px;
        left: -2px;
        transform: rotate(-44deg);
        width: 1px;
        height: 7px;
      }
      &::after {
        top: -51px;
        right: -4px;
        transform: rotate(41deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -39px;
        left: -3px;
        transform: rotate(-51deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -43px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -29px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -29px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -22px;
        left: -4px;
        transform: rotate(-63deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -18px;
        right: -5px;
        transform: rotate(55deg);
        width: 1px;
        height: 8px;
      }
    }
  }
`;

export const BranchSix = styled.span`
  && {
    bottom: calc(100% - 28px);
    left: calc(50% + 2px);
  }
  transform: rotate(60deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 48px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -48px;
        left: -3px;
        transform: rotate(-39deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -46px;
        right: -5px;
        transform: rotate(35deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -24px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -35px;
        right: -5px;
        transform: rotate(40deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -11px;
        left: -4px;
        transform: rotate(-87deg);
        width: 1px;
        height: 6px;
      }
      &::after {
        top: -28px;
        right: -7px;
        transform: rotate(34deg);
        width: 1px;
        height: 19px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -28px;
        right: -8.4px;
        transform: rotate(-5deg);
        width: 1px;
        height: 7px;
      }
      &::after {
        top: -21px;
        right: -9px;
        transform: rotate(79deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchSeven = styled.span`
  && {
    bottom: calc(100% - 41px);
    left: calc(50% - 3px);
  }
  transform: rotate(-60deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 48px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -47px;
        left: -2px;
        transform: rotate(-44deg);
        width: 1px;
        height: 7px;
      }
      &::after {
        top: -46px;
        right: -4px;
        transform: rotate(41deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -39px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -38px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -29px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -29px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -18px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -12px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchEight = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 51px);
    left: calc(50% + 1px);
  }
  transform: rotate(60deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 48px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -46px;
        left: -3px;
        transform: rotate(-46deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -43px;
        right: -5px;
        transform: rotate(41deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -30px;
        left: -3px;
        transform: rotate(-46deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -33px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -10px;
        right: -5px;
        transform: rotate(55deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -22px;
        left: -5px;
        transform: rotate(-44deg);
        width: 1px;
        height: 16px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -23px;
        right: -5px;
        transform: rotate(49deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -22px;
        right: 5px;
        transform: rotate(10deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(6) {
      &::before {
        top: -16px;
        right: 8px;
        transform: rotate(84deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchNine = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    right: calc(50% + 1px);
    bottom: calc(100% - 59px);
  }
  transform: rotate(-60deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 51px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -50px;
        left: -3px;
        transform: rotate(-46deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -43px;
        right: -5px;
        transform: rotate(41deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -35px;
        left: -3px;
        transform: rotate(-46deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -33px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -14px;
        right: -5px;
        transform: rotate(55deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -22px;
        left: -5px;
        transform: rotate(-44deg);
        width: 1px;
        height: 16px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -23px;
        right: -5px;
        transform: rotate(49deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -22px;
        right: 5px;
        transform: rotate(10deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(6) {
      &::before {
        top: -16px;
        right: 8px;
        transform: rotate(84deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchTen = styled.span`
  && {
    bottom: calc(100% - 68px);
    left: calc(50% + 2px);
  }
  transform: rotate(65deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 43px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -40px;
        left: -3px;
        transform: rotate(-39deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -42px;
        right: -5px;
        transform: rotate(35deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -28px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -28px;
        right: -5px;
        transform: rotate(40deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -17px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -17px;
        right: -9px;
        transform: rotate(55deg);
        width: 1px;
        height: 19px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -14px;
        right: -8.4px;
        transform: rotate(11deg);
        width: 1px;
        height: 7px;
      }
      &::after {
        top: -8px;
        right: -9px;
        transform: rotate(-61deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(6) {
      &::before {
        top: -12px;
        right: -15px;
        transform: rotate(-60deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchEleven = styled.span`
  && {
    bottom: calc(100% - 74px);
    left: calc(50% - 3px);
  }
  transform: rotate(-65deg);
  transform-origin: right;
  > span {
    ${ElementsCommonStyleUnspecified};
    &::before, &::after {
      content: '';
      transform-origin: right;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(1) {
      width: 2px;
      height: 39px;
      background: ${treeTrunkAndBranchColor};
    }
    &:nth-of-type(2) {
      &::before {
        top: -39px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -38px;
        right: -5px;
        transform: rotate(48deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -29px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -29px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 7px;
      }
    }
    &:nth-of-type(4) {
      &::before {
        top: -18px;
        left: -3px;
        transform: rotate(-52deg);
        width: 1px;
        height: 8px;
      }
      &::after {
        top: -10px;
        right: -4px;
        transform: rotate(52deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

export const BranchOneLeafsOne = styled(Leafs)`
  position: absolute;
  top: -54px;
  left: -7px;
  transform: rotate(-23deg);
`;

export const BranchOneLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -51px;
  left: -15px;
  transform: rotate(-62deg);
`;

export const BranchOneLeafsThree = styled(Leafs)`
  position: absolute;
  top: -50px;
  left: 1px;
  transform: rotate(52deg);
`;

export const BranchOneLeafsFour = styled(Leafs)`
  position: absolute;
  top: -40px;
  left: -15px;
  transform: rotate(-62deg);
`;

export const BranchOneLeafsFive = styled(Leafs)`
  position: absolute;
  top: -42px;
  left: 0;
  transform: rotate(62deg);
`;

export const BranchOneLeafsSix = styled(Leafs)`
  position: absolute;
  top: -22px;
  left: -13px;
  transform: rotate(-62deg);
`;

export const BranchTwoLeafsOne = styled(Leafs)`
  position: absolute;
  top: -55px;
  left: -6px;
  transform: rotate(-8deg);
`;

export const BranchTwoLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -49px;
  left: 0;
  transform: rotate(49deg);
`;

export const BranchTwoLeafsThree = styled(Leafs)`
  position: absolute;
  top: -48px;
  left: -14px;
  transform: rotate(-67deg);
`;

export const BranchTwoLeafsFour = styled(Leafs)`
  position: absolute;
  top: -39px;
  left: -14px;
  transform: rotate(-67deg);
`;

export const BranchTwoLeafsFive = styled(Leafs)`
  position: absolute;
  top: -42px;
  left: 1px;
  transform: rotate(10deg);
`;

export const BranchTwoLeafsSix = styled(Leafs)`
  position: absolute;
  top: -30px;
  left: 1px;
  transform: rotate(55deg);
`;

export const BranchTwoLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -33px;
  left: -13px;
  transform: rotate(-59deg);
`;

export const BranchTwoLeafsEight = styled(Leafs)`
  position: absolute;
  top: -22px;
  left: -1px;
  transform: rotate(47deg);
`;

export const BranchThreeLeafsOne = styled(Leafs)`
  position: absolute;
  top: -56px;
  left: -6px;
  transform: rotate(-5deg);
`;

export const BranchThreeLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -47px;
  left: -15px;
  transform: rotate(-61deg);
`;

export const BranchThreeLeafsThree = styled(Leafs)`
  position: absolute;
  top: -50px;
  left: 0;
  transform: rotate(36deg);
`;

export const BranchThreeLeafsFour = styled(Leafs)`
  position: absolute;
  top: -40px;
  left: 2px;
  transform: rotate(61deg);
`;

export const BranchThreeLeafsFive = styled(Leafs)`
  position: absolute;
  top: -37px;
  left: -13px;
  transform: rotate(-65deg);
`;

export const BranchThreeLeafsSix = styled(Leafs)`
  position: absolute;
  top: -32px;
  left: 2px;
  transform: rotate(72deg);
`;

export const BranchThreeLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -33px;
  left: -18px;
  transform: rotate(-50deg);
`;

export const BranchThreeLeafsEight = styled(Leafs)`
  position: absolute;
  top: -32px;
  left: -13px;
  transform: rotate(-31deg);
`;

export const BranchThreeLeafsNine = styled(Leafs)`
  position: absolute;
  top: -21px;
  left: -16px;
  transform: rotate(-101deg);
`;

export const BranchFourLeafsOne = styled(Leafs)`
  position: absolute;
  top: -62px;
  left: -7px;
  transform: rotate(-18deg);
`;

export const BranchFourLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -58px;
  left: -14px;
  transform: rotate(-68deg);
`;

export const BranchFourLeafsThree = styled(Leafs)`
  position: absolute;
  top: -58px;
  left: 0;
  transform: rotate(18deg);
`;

export const BranchFourLeafsFour = styled(Leafs)`
  position: absolute;
  top: -47px;
  left: -17px;
  transform: rotate(-71deg);
`;

export const BranchFourLeafsFive = styled(Leafs)`
  position: absolute;
  top: -49px;
  left: 0;
  transform: rotate(38deg);
`;

export const BranchFourLeafsSix = styled(Leafs)`
  position: absolute;
  top: -37px;
  left: -1px;
  transform: rotate(38deg);
`;

export const BranchFourLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -39px;
  left: -16px;
  transform: rotate(-77deg);
`;

export const BranchFourLeafsEight = styled(Leafs)`
  position: absolute;
  top: -21px;
  left: -15px;
  transform: rotate(-88deg);
`;

export const BranchFourLeafsNine = styled(Leafs)`
  position: absolute;
  top: -52px;
  left: 11px;
  transform: rotate(-5deg);
`;

export const BranchFourLeafsTen = styled(Leafs)`
  position: absolute;
  top: -51px;
  left: 5px;
  transform: rotate(-69deg);
`;

export const BranchFourLeafsEleven = styled(Leafs)`
  position: absolute;
  top: -47px;
  left: 17px;
  transform: rotate(63deg);
`;

export const BranchFourLeafsTwelve = styled(Leafs)`
  position: absolute;
  top: -38px;
  left: 15px;
  transform: rotate(63deg);
`;

export const BranchFourLeafsThirteen = styled(Leafs)`
  position: absolute;
  top: -46px;
  left: 1px;
  transform: rotate(-69deg);
`;

export const BranchFourLeafsFourteen = styled(Leafs)`
  position: absolute;
  top: -36px;
  left: -2px;
  transform: rotate(-69deg);
`;

export const BranchFourLeafsFifteen = styled(Leafs)`
  position: absolute;
  top: -26px;
  left: -4px;
  transform: rotate(-70deg);
`;

export const BranchFourLeafsSixteen = styled(Leafs)`
  position: absolute;
  top: -29px;
  left: 11px;
  transform: rotate(54deg);
`;

export const BranchFiveLeafsOne = styled(Leafs)`
  position: absolute;
  top: -64px;
  left: -6px;
  transform: rotate(-3deg);
`;

export const BranchFiveLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -61px;
  left: 1px;
  transform: rotate(35deg);
`;

export const BranchFiveLeafsThree = styled(Leafs)`
  position: absolute;
  top: -48px;
  left: 1px;
  transform: rotate(59deg);
`;

export const BranchFiveLeafsFour = styled(Leafs)`
  position: absolute;
  top: -56px;
  left: -14px;
  transform: rotate(-66deg);
`;

export const BranchFiveLeafsFive = styled(Leafs)`
  position: absolute;
  top: -46px;
  left: -14px;
  transform: rotate(-66deg);
`;

export const BranchFiveLeafsSix = styled(Leafs)`
  position: absolute;
  top: -35px;
  left: 1px;
  transform: rotate(74deg);
`;

export const BranchFiveLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -36px;
  left: -13px;
  transform: rotate(-66deg);
`;

export const BranchFiveLeafsEight = styled(Leafs)`
  position: absolute;
  top: -26px;
  left: -13px;
  transform: rotate(-82deg);
`;

export const BranchFiveLeafsNine = styled(Leafs)`
  position: absolute;
  top: -22px;
  left: 1px;
  transform: rotate(74deg);
`;

export const BranchSixLeafsOne = styled(Leafs)`
  position: absolute;
  top: -59px;
  left: -6px;
`;

export const BranchSixLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -52px;
  left: -14px;
  transform: rotate(-88deg);
`;

export const BranchSixLeafsThree = styled(Leafs)`
  position: absolute;
  top: -49px;
  left: 0;
  transform: rotate(52deg);
`;

export const BranchSixLeafsFour = styled(Leafs)`
  position: absolute;
  top: -38px;
  left: 0;
  transform: rotate(61deg);
`;

export const BranchSixLeafsFive = styled(Leafs)`
  position: absolute;
  top: -29px;
  left: -14px;
  transform: rotate(-91deg);
`;

export const BranchSixLeafsSix = styled(Leafs)`
  position: absolute;
  top: -16px;
  left: -17px;
  transform: rotate(-104deg);
`;

export const BranchSixLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -37px;
  left: -1px;
  transform: rotate(-31deg);
`;

export const BranchSixLeafsEight = styled(Leafs)`
  position: absolute;
  top: -41px;
  left: 7px;
  transform: rotate(5deg);
`;

export const BranchSixLeafsNine = styled(Leafs)`
  position: absolute;
  top: -24px;
  left: 5px;
  transform: rotate(75deg);
`;

export const BranchSevenLeafsOne = styled(Leafs)`
  position: absolute;
  top: -59px;
  left: -6px;
`;

export const BranchSevenLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -55px;
  left: 1px;
  transform: rotate(34deg);
`;

export const BranchSevenLeafsThree = styled(Leafs)`
  position: absolute;
  top: -45px;
  left: -1px;
  transform: rotate(34deg);
`;

export const BranchSevenLeafsFour = styled(Leafs)`
  position: absolute;
  top: -46px;
  left: -12px;
  transform: rotate(-56deg);
`;

export const BranchSevenLeafsFive = styled(Leafs)`
  position: absolute;
  top: -33px;
  left: 0;
  transform: rotate(75deg);
`;

export const BranchSevenLeafsSix = styled(Leafs)`
  position: absolute;
  top: -35px;
  left: -13px;
  transform: rotate(-69deg);
`;

export const BranchSevenLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -23px;
  left: -14px;
  transform: rotate(-79deg);
`;

export const BranchSevenLeafsEight = styled(Leafs)`
  position: absolute;
  top: -17px;
  left: 0;
  transform: rotate(75deg);
`;

export const BranchEightLeafsOne = styled(Leafs)`
  position: absolute;
  top: -59px;
  left: -6px;
`;

export const BranchEightLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -50px;
  left: -14px;
  transform: rotate(-101deg);
`;

export const BranchEightLeafsThree = styled(Leafs)`
  position: absolute;
  top: -50px;
  left: 0;
  transform: rotate(25deg);
`;

export const BranchEightLeafsFour = styled(Leafs)`
  position: absolute;
  top: -38px;
  left: 0;
  transform: rotate(24deg);
`;

export const BranchEightLeafsFive = styled(Leafs)`
  position: absolute;
  top: -36px;
  left: -12px;
  transform: rotate(-62deg);
`;

export const BranchEightLeafsSix = styled(Leafs)`
  position: absolute;
  top: -26px;
  left: 0;
  transform: rotate(67deg);
`;

export const BranchEightLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -13px;
  left: 0;
  transform: rotate(74deg);
`;

export const BranchEightLeafsEight = styled(Leafs)`
  position: absolute;
  top: -29px;
  left: -23px;
  transform: rotate(-70deg);
`;

export const BranchEightLeafsNine = styled(Leafs)`
  position: absolute;
  top: -21px;
  left: -19px;
  transform: rotate(-115deg);
`;

export const BranchEightLeafsTen = styled(Leafs)`
  position: absolute;
  top: -29px;
  left: -12px;
  transform: rotate(11deg);
`;

export const BranchNineLeafsOne = styled(Leafs)`
  position: absolute;
  top: -60px;
  left: -7px;
  transform: rotate(-7deg);
`;

export const BranchNineLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -49px;
  left: 0;
  transform: rotate(40deg);
`;

export const BranchNineLeafsThree = styled(Leafs)`
  position: absolute;
  top: -54px;
  left: -14px;
  transform: rotate(-65deg);
`;

export const BranchNineLeafsFour = styled(Leafs)`
  position: absolute;
  top: -40px;
  left: -13px;
  transform: rotate(-76deg);
`;

export const BranchNineLeafsFive = styled(Leafs)`
  position: absolute;
  top: -36px;
  left: -1px;
  transform: rotate(111deg);
`;

export const BranchNineLeafsSix = styled(Leafs)`
  position: absolute;
  top: -27px;
  left: 2px;
  transform: rotate(72deg);
`;

export const BranchNineLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -18px;
  left: 3px;
  transform: rotate(72deg);
`;

export const BranchNineLeafsEight = styled(Leafs)`
  position: absolute;
  top: -29px;
  left: -19px;
  transform: rotate(-58deg);
`;

export const BranchNineLeafsNine = styled(Leafs)`
  position: absolute;
  top: -30px;
  left: -11px;
  transform: rotate(17deg);
`;

export const BranchNineLeafsTen = styled(Leafs)`
  position: absolute;
  top: -15px;
  left: -14px;
  transform: rotate(-150deg);
`;

export const BranchElevenLeafsOne = styled(Leafs)`
  position: absolute;
  top: -48px;
  left: -6px;
  transform: rotate(-13deg);
`;

export const BranchElevenLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -41px;
  left: -2px;
  transform: rotate(49deg);
`;

export const BranchElevenLeafsThree = styled(Leafs)`
  position: absolute;
  top: -44px;
  left: -13px;
  transform: rotate(-77deg);
`;

export const BranchElevenLeafsFour = styled(Leafs)`
  position: absolute;
  top: -34px;
  left: -14px;
  transform: rotate(-83deg);
`;

export const BranchElevenLeafsFive = styled(Leafs)`
  position: absolute;
  top: -30px;
  left: 0;
  transform: rotate(107deg);
`;

export const BranchElevenLeafsSix = styled(Leafs)`
  position: absolute;
  top: -22px;
  left: -14px;
  transform: rotate(-94deg);
`;

export const BranchElevenLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -14px;
  left: 1px;
  transform: rotate(74deg);
`;

export const BranchTenLeafsOne = styled(Leafs)`
  position: absolute;
  top: -51px;
  left: -6px;
`;

export const BranchTenLeafsTwo = styled(Leafs)`
  position: absolute;
  top: -44px;
  left: -14px;
  transform: rotate(-72deg);
`;

export const BranchTenLeafsThree = styled(Leafs)`
  position: absolute;
  top: -44px;
  left: -1px;
  transform: rotate(40deg);
`;

export const BranchTenLeafsFour = styled(Leafs)`
  position: absolute;
  top: -34px;
  left: 1px;
  transform: rotate(55deg);
`;

export const BranchTenLeafsFive = styled(Leafs)`
  position: absolute;
  top: -31px;
  left: -14px;
  transform: rotate(-99deg);
`;

export const BranchTenLeafsSix = styled(Leafs)`
  position: absolute;
  top: -19px;
  left: -15px;
  transform: rotate(-102deg);
`;

export const BranchTenLeafsSeven = styled(Leafs)`
  position: absolute;
  top: -19px;
  left: 7px;
  transform: rotate(67deg);
`;

export const BranchTenLeafsEight = styled(Leafs)`
  position: absolute;
  top: -23px;
  left: -1px;
  transform: rotate(-20deg);
`;

export const BranchTenLeafsNine = styled(Leafs)`
  position: absolute;
  top: -10px;
  left: 3px;
  transform: rotate(137deg);
`;
