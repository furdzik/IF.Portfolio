import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const AreaWrapper = styled.div`
  position: relative;
  width: 12.3rem;
  height: 18.6rem;
  box-shadow: .5rem 1.6rem 1.3rem -1.7rem #a5a3a3;
`;

const MeWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
`;

const Hair = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 0;
  left: 0;
  width: 100%;
  height: 11.2rem;

  span {
    top: 0;
    background: #eacb6e;
    &:nth-of-type(1) {
      width: 11.8rem;
      height: 100%;
      border-radius: 5.5rem / 8rem;
      background: #eacb6e; // #ecd48e, #ecd48e, #c0b3a1
    }
    &:nth-of-type(2) {
      left: 4.1rem;
      z-index: 2;
      width: 6.6rem;
      height: 5rem;
      border-radius: 5.1rem 10.3rem 5.1rem 5.1rem;
    }
    &:nth-of-type(3) {
      top: 3rem;
      left: 2.1rem;
      z-index: 2;
      transform: rotate(27deg);
      width: 10.9rem;
      height: 3.2rem;
      border-radius: 28.4rem 28.4rem 0 23rem / 8.3rem 18.1rem 8.3rem 4.9rem;
    }
    &:nth-of-type(4) {
      top: 5.5rem;
      right: 0;
      z-index: 2;
      transform: rotate(4deg);
      width: .6rem;
      height: 3rem;
      background: #ffffff;
    }
  }
`;

const HeadWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  z-index: 3;
  width: 100%;
  height: 100%;
`;

const Face = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 1rem;
  left: 2rem;
  transform: rotate(6deg);
  width: 7.8rem;
  height: 11rem;
  border-radius: 7.1rem / 8.9rem;
  background: #ffd9bc; //#e7bc99;
`;

const Eyebrows = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 51px;
  left: 8px;
  width: 60px;
  height: 4px;
  span {
    top: 0;
    width: 24px;
    height: 12px;
    border-top: 2px solid #8a6522;
    border-radius: 24px / 12px;
    &:nth-of-type(1) {
      left: 0;
      transform: rotate(9deg);
    }
    &:nth-of-type(2) {
      right: 0;
      transform: rotate(-6deg);
    }
  }
`;

const Eyes = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 60px;
  left: 11px;
  z-index: 3;
  width: 54px;
  height: 9px;
  span {
    top: 0;
    width: 20px;
    height: 20px;
    border-top: 3px solid #000000;
    border-radius: 20px;
    &:nth-of-type(1) {
      left: 0;
    }
    &:nth-of-type(2) {
      right: 0;
    }
  }
`;

const Nose = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 70px;
  left: 30px;
  z-index: 3;
  width: 17px;
  height: 10px;
  border-bottom: 3px solid #d4a480;
  border-radius: 17px / 10px;
`;

const Lips = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 85px;
  left: 20px;
  z-index: 1;
  width: 40px;
  height: 11px;
  span {
    &:nth-of-type(1) {
      top: -14px;
      width: 40px;
      height: 20px;
      border-bottom: 1px solid #d09f79;
      border-radius: 40px / 20px;
    }
    &:nth-of-type(2) {
      top: -2px;
      width: 6px;
      height: 6px;
      border-left: 1px solid #d09f79;
      border-radius: 6px;
    }
    &:nth-of-type(3) {
      top: -2px;
      right: 0;
      width: 6px;
      height: 6px;
      border-right: 1px solid #d09f79;
      border-radius: 6px;
    }
    &:nth-of-type(4) {
      top: -18px;
      left: 5px;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background: #ffffff;
    }
    &:nth-of-type(5) {
      top: -18px;
      left: 5px;
      width: 30px;
      height: 30px;
      border-bottom: 2px solid #b50002;
      border-radius: 30px;
    }
    &:nth-of-type(6) {
      top: -20px;
      left: 2px;
      z-index: 1;
      width: 38px;
      height: 26px;
      border-bottom: 1px solid #b50002;
      border-radius: 40px / 20px;
      background: #ffd9bc;
    }
  }
`;

const Ear = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 70px;
  left: 95px;
  z-index: 5;
  transform: rotate(11deg);
  width: 10px;
  height: 16px;
  border-radius: 17px 12px 20px 0;
  background: #ffd9bc;
`;

const Clothes = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 116px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 74px;
  span {
    &:nth-of-type(1) {
      left: 43px;
      z-index: 2;
      width: 29px;
      height: 34px;
      border-bottom: 1px dotted #ffffff;
      background: #000000;
    }
    &:nth-of-type(2) {
      top: 25px;
      left: 28px;
      z-index: 1;
      border-width: 0 30px 20px;
      border-style: solid;
      border-color: #0d6ce6 transparent;
    }
    &:nth-of-type(3) {
      top: 0;
      left: 46px;
      z-index: 3;
      border-width: 12px 11px 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &:nth-of-type(4) {
      top: 12px;
      left: 57px;
      z-index: 3;
      height: 21px;
      border-left: 1px dotted #ffffff;
    }
  }
`;

const Hand = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 29px;
  width: 6px;
  height: 8px;
  border: 1px solid #ffd9bc;
  border-radius: 3px;
  background: #ffd9bc;
`;

const Arm = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 116px;
  left: 3.5rem;
  z-index: 2;
  height: 50px;
  span {
    width: 5px;
    height: 30px;
    background: #000000;
    &:nth-of-type(1) {
      top: -6px;
      right: 12px;
      border-radius: 5px 5px 0 0;
    }
    &:nth-of-type(2) {
      top: 11px;
      right: 14px;
      border-radius: 5px;
    }
  }

  ${(props) => props.right && css`
    right: 0;
    left: auto;
    width: 57px;
    span {
      &:nth-of-type(1) {
        left: 12px;
        transform: rotate(-54deg);
      }
      &:nth-of-type(2) {
        left: 14px;
        transform: rotate(51deg);
      }
    }
    ${Hand} {
      left: 3px;
    }
  `};

  ${(props) => props.left && css`
    left: 17px;
    width: 31px;
    span {
      &:nth-of-type(1) {
        transform: rotate(54deg);
      }
      &:nth-of-type(2) {
        transform: rotate(-51deg);
      }
    }
    ${Hand} {
      right: 3px;
    }
  `};

  ${(props) => props.wave && css`
    span:nth-of-type(2) {
      top: -6px;
      left: 33px;
      transform: rotate(52deg);
    }
    ${Hand} {
      top: -7px;
      left: 46px;
      transform: rotate(46deg);
    }
  `};
`;

const Legs = styled.div`
  ${ElementsCommonStyleUnspecified};
  top: 161px;
  left: 50px;
  z-index: 2;
  width: 16px;
  height: 24px;
`;

const Leg = styled.div`
  ${ElementsCommonStyleUnspecified};
  left: 0;
  width: 5px;
  height: 24px;
  background: #ffd9bc;
  & + & {
    right: 0;
    left: auto;
  }
  &::before {
    content: '';
    bottom: -4px;
    left: -2px;
    width: 10px;
    height: 6px;
    border-radius: 10px;
    background: #ee382a;
  }
`;

export {
  AreaWrapper,
  MeWrapper,
  Hair,
  HeadWrapper,
  Face,
  Eyebrows,
  Eyes,
  Nose,
  Lips,
  Ear,
  Clothes,
  Hand,
  Arm,
  Legs,
  Leg
};
