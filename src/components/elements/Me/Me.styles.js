import styled, { css } from 'styled-components';

import { ElementsCommonStyleUnspecified } from '../../../styles/elementsCommonStyle.styles';

const AreaWrapper = styled.div`
  position: relative;
  width: 12.3rem;
  height: 18.6rem;
  box-shadow: .5rem 1.6rem 1.3rem -1.7rem #A5A3A3;
`;

const MeWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
`;

const Hair = styled.div`
  ${ElementsCommonStyleUnspecified};
  left: 0;
  top: 0;
  width: 100%;
  height: 11.2rem;

  span {
    top: 0;
    background: #eacb6e;
    &:nth-child(1) {
      width: 11.8rem;
      height: 100%;
      border-radius: 5.5rem / 8rem;
      background: #eacb6e; // #ecd48e, #ecd48e, #c0b3a1
    }
    &:nth-child(2) {
      left: 4.1rem;
      z-index: 2;
      width: 6.6rem;
      height: 5rem;
      border-radius: 5.1rem 10.3rem 5.1rem 5.1rem;
    }
    &:nth-child(3) {
      top: 3rem;
      left: 2.1rem;
      z-index: 2;
      width: 10.9rem;
      height: 3.2rem;
      transform: rotate(27deg);
      border-radius: 28.4rem 28.4rem 0 23rem / 8.3rem 18.1rem 8.3rem 4.9rem;
    }
    &:nth-child(4) {
      top: 5.5rem;
      right: 0;
      z-index: 2;
      width: .6rem;
      height: 3rem;
      transform: rotate(4deg);
      background: #FFFFFF;
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
  background: #ffd9bc; //#E7BC99;
  border-radius: 7.1rem / 8.9rem;
  height: 11rem;
  left: 2rem;
  top: 1rem;
  transform: rotate(6deg);
  width: 7.8rem;
`;

const Eyebrows = styled.div`
  ${ElementsCommonStyleUnspecified};
     height: 4px;
     left: 8px;
     top: 51px;
     width: 60px;
     span {
       border-radius: 24px 24px 24px 24px / 12px 12px 12px 12px;
       border-top: 2px solid #8a6522;
       height: 12px;
       top: 0;
       width: 24px;
       &:nth-child(1) {
         left:0;
         transform: rotate(9deg);
       }
       &:nth-child(2) {
         right:0;
         transform: rotate(-6deg);
       }
       }
`;

const Eyes = styled.div`
  ${ElementsCommonStyleUnspecified};
  height: 9px;
  left: 11px;
  top: 60px;
  width: 54px;
  z-index: 3;
  span {
    border-radius: 20px 20px 20px 20px;
    border-top: 3px solid #000000;
    height: 20px;
    width: 20px;
    top: 0;
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(2) {
      right: 0;
    }
  }
`;

const Nose = styled.div`
  ${ElementsCommonStyleUnspecified};
  border-bottom: 3px solid #D4A480;
  border-radius: 17px 17px 17px 17px / 10px 10px 10px 10px;
  height: 10px;
  left: 30px;
  top: 70px;
  width: 17px;
  z-index: 3;
`;

const Lips = styled.div`
  ${ElementsCommonStyleUnspecified};
  height: 11px;
  left: 20px;
  top: 85px;
  width: 40px;
  z-index: 1;
  span {
    &:nth-child(1) {
      border-bottom: 1px solid #D09F79;
      border-radius: 40px 40px 40px 40px / 20px 20px 20px 20px;
      height: 20px;
      top: -14px;
      width: 40px;
    }
    &:nth-child(2) {
      border-left: 1px solid #D09F79;
      border-radius: 6px 6px 6px 6px;
      height: 6px;
      top: -2px;
      width: 6px;
    }
    &:nth-child(3) {
      border-right: 1px solid #D09F79;
      border-radius: 6px 6px 6px 6px;
      height: 6px;
      top: -2px;
      width: 6px;
      right: 0;
    }
    &:nth-child(4) {
      background:#fff;
      border-radius: 30px 30px 30px 30px;
      height: 30px;
      left: 5px;
      top: -18px;
      width: 30px;
    }
    &:nth-child(5) {
      border-bottom: 2px solid #b50002;
      border-radius: 30px 30px 30px 30px;
      height: 30px;
      left: 5px;
      top: -18px;
      width: 30px;
    }
    &:nth-child(6) {
      background: #ffd9bc;
      border-bottom: 1px solid #b50002;
      border-radius: 40px 40px 40px 40px / 20px 20px 20px 20px;
      height: 26px;
      left: 2px;
      top: -20px;
      width: 38px;
      z-index: 1;
    }
  }
`;

const Ear = styled.div`
  ${ElementsCommonStyleUnspecified};
   background: #ffd9bc;
   border-radius: 17px 12px 20px 0;
   height: 16px;
   left: 95px;
   top: 70px;
   -moz-transform: rotate(11deg);
   -webkit-transform: rotate(11deg);
   -o-transform: rotate(11deg);
   -ms-transform: rotate(11deg);
   transform: rotate(11deg);
   width: 10px;
   z-index: 5;
`;

const Clothes = styled.div`
  ${ElementsCommonStyleUnspecified};
  height: 74px;
  top: 116px;
  left: 0;
  width: 100%;
  z-index: 1;
  span {
  &:nth-child(1) {
     background: #000000;
     border-bottom: 1px dotted #FFFFFF;
     height: 34px;
     left: 43px;
     width: 29px;
     z-index: 2;
   }
  &:nth-child(2) {
     border-color: #0d6ce6 transparent;
     border-style: solid;
     border-width: 0 30px 20px;
     left: 28px;
     top: 25px;
     z-index: 1;
   }
  &:nth-child(3) {
     border-color: #FFFFFF transparent;
     border-style: solid;
     border-width: 12px 11px 0;
     left: 46px;
     top: 0;
     z-index: 3;
   }
  &:nth-child(4) {
    border-left: 1px dotted #FFFFFF;
    height: 21px;
    left: 57px;
    top: 12px;
    z-index: 3;
   }
  }
`;

const Hand = styled.div`
  ${ElementsCommonStyleUnspecified};
  background: #ffd9bc;
  border: 1px solid #ffd9bc;
  border-radius: 3px 3px 3px 3px;
  height: 8px;
  width: 6px;
  top: 29px;
`;

const Arm = styled.div`
  ${ElementsCommonStyleUnspecified};
  z-index: 2;
  height: 50px;
  top: 116px;
  left: 3.5rem;
  span {
    background: #000000;
    width: 5px;
    height: 30px;
    &:nth-child(1) {
      border-radius: 5px 5px 0 0;
      right: 12px;
      top: -6px;
    }
    &:nth-child(2) {
      border-radius: 5px 5px 5px 5px;
      right: 14px;
      top: 11px;
    }
  }

  ${(props) => props.right && css`
    left: auto;
    right: 0;
    width: 57px;
    span {
      &:nth-child(1) {
        transform: rotate(-54deg);
        left: 12px;
      }
      &:nth-child(2) {
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
      &:nth-child(1) {
        transform: rotate(54deg);
      }
      &:nth-child(2) {
        transform: rotate(-51deg);
      }
    }
    ${Hand} {
      right: 3px;
    }
  `};

  ${(props) => props.wave && css`
    span:nth-child(2) {
      left: 33px;
      top: -6px;
      transform: rotate(52deg);
    }
    ${Hand} {
      left: 46px;
      top: -7px;
      transform: rotate(46deg);
    }
  `};
`;

const Legs = styled.div`
  ${ElementsCommonStyleUnspecified};
  z-index: 2;
  height: 24px;
  left: 50px;
  top: 161px;
  width: 16px;
`;

const Leg = styled.div`
  ${ElementsCommonStyleUnspecified};
  background: #ffd9bc;
  width:5px;
  height:24px;
  left:0;
  & + & {
    left: auto;
    right: 0;
  }
  &:before {
    content: '';
    background: #ee382a;
    border-radius: 10px 10px 10px 10px;
    bottom: -4px;
    height: 6px;
    left: -2px;
    width: 10px;
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
