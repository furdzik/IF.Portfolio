import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const treeTrunkAndBranchColor = '#6e471c';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 16rem;
  //outline: 1px dotted red;

  ${(props) => props.isTaller && css`
    height: 18rem;
  `};

  ${(props) => props.green && css`
  `};
`;

const Trunk = styled.span`
  ${ElementsCommonStyleUnspecified};
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 116px;

  ${(props) => props.isTaller && css`
    height: 136px;
  `};
`;

const TrunkMain = styled.span`
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

const BranchOne = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 7px);
    left: calc(50% - 1px);
  }
  transform: rotate(-10deg);
  transform-origin: right;
  span {
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

const BranchTwo = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 7px);
    left: calc(50% - 1px);
  }
  transform: rotate(10deg);
  transform-origin: right;
  span {
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
        top: -40px;
        left: -3px;
        transform: rotate(-38deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -44px;
        right: -4px;
        transform: rotate(33deg);
        width: 1px;
        height: 8px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -30px;
        left: -3px;
        transform: rotate(-66deg);
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
        top: -26px;
        right: -6px;
        transform: rotate(50deg);
        width: 1px;
        height: 12px;
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

const BranchThree = styled.span`
  && {
    bottom: calc(100% - 13px);
    left: calc(50% - 3px);
  }
  transform: rotate(-27deg);
  transform-origin: right;
  span {
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
        left: -4px;
        transform: rotate(-66deg);
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

const BranchFour = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 15px);
    left: calc(50% + 1px);
  }
  transform: rotate(32deg);
  transform-origin: right;
  span {
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
        top: -54px;
        left: -3px;
        transform: rotate(-35deg);
        width: 1px;
        height: 11px;
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
        top: -20px;
        left: -3px;
        transform: rotate(-63deg);
        width: 1px;
        height: 5px;
      }
      &::after {
        top: -20px;
        right: -7px;
        transform: rotate(55deg);
        width: 1px;
        height: 13px;
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
        top: -33px;
        right: -5px;
        transform: rotate(46deg);
        width: 1px;
        height: 10px;
      }
    }
  }
`;

const BranchFive = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 28px);
    left: calc(50% - 3px);
  }
  transform: rotate(-49deg);
  transform-origin: right;
  span {
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
        top: -54px;
        left: -3px;
        transform: rotate(-35deg);
        width: 1px;
        height: 11px;
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
    &:nth-of-type(5) {
      &::before {
        top: -32px;
        left: -4px;
        transform: rotate(-63deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -34px;
        right: -4px;
        transform: rotate(46deg);
        width: 1px;
        height: 7px;
      }
    }
  }
`;

const BranchSix = styled.span`
  && {
    bottom: calc(100% - 28px);
    left: calc(50% + 2px);
  }
  transform: rotate(60deg);
  transform-origin: right;
  span {
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
        top: -52px;
        left: -3px;
        transform: rotate(-44deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -50px;
        right: -5px;
        transform: rotate(35deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -43px;
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
        top: -17px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 9px;
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

const BranchSeven = styled.span`
  && {
    bottom: calc(100% - 41px);
    left: calc(50% - 3px);
  }
  transform: rotate(-60deg);
  transform-origin: right;
  span {
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
        top: -52px;
        left: -3px;
        transform: rotate(-44deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -50px;
        right: -5px;
        transform: rotate(35deg);
        width: 1px;
        height: 10px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -43px;
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
        top: -17px;
        left: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 9px;
      }
      &::after {
        top: -35px;
        left: -4px;
        transform: rotate(-40deg);
        width: 1px;
        height: 12px;
      }
    }
  }
`;

const BranchEight = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 51px);
    left: calc(50% + 1px);
  }
  transform: rotate(57deg);
  transform-origin: right;
  span {
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
        top: -50px;
        left: -3px;
        transform: rotate(-35deg);
        width: 1px;
        height: 11px;
      }
      &::after {
        top: -40px;
        right: -5px;
        transform: rotate(41deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(3) {
      &::before {
        top: -30px;
        left: -4px;
        transform: rotate(-66deg);
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
        top: -18px;
        left: -4px;
        transform: rotate(-52deg);
        width: 1px;
        height: 10px;
      }
      &::after {
        top: -14px;
        right: -5px;
        transform: rotate(55deg);
        width: 1px;
        height: 9px;
      }
    }
    &:nth-of-type(5) {
      &::before {
        top: -23px;
        right: -5px;
        transform: rotate(46deg);
        width: 1px;
        height: 10px;
      }
    }
  }
`;

export {
  Wrapper,
  Trunk,
  TrunkMain,
  BranchOne,
  BranchTwo,
  BranchThree,
  BranchFour,
  BranchFive,
  BranchSix,
  BranchSeven,
  BranchEight
};
