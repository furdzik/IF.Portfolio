import styled, { css } from 'styled-components';

import { ElementsCommonStyleUnspecified } from '../../../styles/elementsCommonStyle.styles';

const CatElement = css`
  bottom: 0;
  background: #ccc;
  border: 1px solid #bebebe;
  span {
   bottom: 0;
  }
`;

const AreaWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 7rem;
`;

const CatWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
`;

const HeadWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  ${CatElement};
  width: 80%;
  left: 5px;
  height: 38px;
  bottom: 32px;
  border-radius: 30px;
  z-index: 3;
  span {
    top: 0;
    &:nth-child(1),
    &:nth-child(2) {
      border-color: #C2C1C1 transparent;
      border-style: solid;
      border-width: 0 9px 16px;
      top:-11px;
      width: 0;
      height: 0;
    }
    &:nth-child(1) {
      left:-2px;
      -moz-transform: rotate(-31deg);
      -webkit-transform: rotate(-31deg);
      -o-transform: rotate(-31deg);
      -ms-transform: rotate(-31deg);
      transform: rotate(-31deg);
    }
    &:nth-child(2) {
      right: -2px;
      transform: rotate(31deg);
    }
    &:nth-child(3),
    &:nth-child(4) {
      background: #737373;
      top: 15px;
      width: 4px;
      height: 4px;
      border-radius: 5px;
    }
    &:nth-child(3) {
      left: 10px;
    }
    &:nth-child(4) {
      right: 10px;
    }
    &:nth-child(5) {
      left: 17px;
      top: 20px;
      background: #3f3f3f;
      width: 6px;
      height: 4px;
      border-radius: 5px;
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11) {
      width: 15px;
      height: 1px;
      background: #5E5E5E;
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      left: -4px;
    }
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11) {
      right: -4px;
    }
    &:nth-child(6),
    &:nth-child(9) {
      top: 22px;
    }
    &:nth-child(7), &:nth-child(10) {
      top: 26px;
    }
    &:nth-child(8), &:nth-child(11) {
      top: 30px;
    }
    &:nth-child(6) {
      transform: rotate(13deg);
    }
    &:nth-child(7) {
      transform: rotate(0deg);
      margin-left: -1px;
    }
    &:nth-child(8) {
      transform: rotate(-13deg);
    }
    &:nth-child(9) {
      transform: rotate(-13deg);
    }
    &:nth-child(10) {
      transform: rotate(0deg);
      margin-right: -1px;
    }
    &:nth-child(11) {
      transform: rotate(13deg);
    }
  }
`;

const Torso = styled.div`
  ${ElementsCommonStyleUnspecified};
  ${CatElement};
  width: 100%;
  height: 50px;
  border-radius: 50px;
  z-index: 1;
`;

const Leg = styled.div`
  ${ElementsCommonStyleUnspecified};
  z-index: 2;
  height: 60px;
  width: 100%;
  bottom: 0;

  span {
    background: #C2C1C1;
    border-color: #C2C1C1;
    border-style: solid;
    &:nth-child(1),
    &:nth-child(2) {
      background: none;
      border-radius: 12px;
      height: 50px;
      width: 32px;
      bottom: -3px;
    }
    &:nth-child(1) {
      border-right-width: 15px;
      left: -22px;
      transform: rotate(10deg);
    }
    &:nth-child(2) {
      border-left-width: 15px;
      left: 25px;
      transform: rotate(-10deg);
    }
    &:nth-child(3),
    &:nth-child(4) {
      width: 10px;
      height: 8px;
      border-radius: 20px;
      bottom: -5px;
    }
    &:nth-child(3) {
      left: 4px;
    }
    &:nth-child(4) {
      left: 36px;
    }
  }

  //leg 2
  ${(props) => props.right && css`
    span {
      background: #ccc;
      border-color: #ccc;
      border-style: solid;
      &:nth-child(1),
      &:nth-child(2) {
        width: 24px;
        height: 12px;
        border-radius: 20px;
        bottom: 0;
        z-index: 0;
      }
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: 29px;
      }
    }
  `}
`;

const Tail = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  span {
    background: #ccc;
    border: 1px solid #bebebe;
    bottom: 0;
    &:nth-child(1) {
      width: 13px;
      height: 40px;
      left: -17px;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
      transform: rotate(39deg);
    }
    &:nth-child(2) {
      width: 13px;
      height: 21px;
      left: -21px;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
      transform: rotate(-10deg);
      bottom: -3px;
    }
    &:nth-child(3) {
      border: none;
      width: 12px;
      height: 12px;
      left: -17px;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
      transform: rotate(31deg);
      bottom: 14px;
    }
    &:nth-child(4) {
      border: none;
      width: 12px;
      height: 12px;
      left: -5px;
      bottom: 17px;
      border-radius: 20px;
    }
    &:nth-child(4) {
      border:none;
      width: 16px;
      height: 16px;
      left: -18px;
      bottom: -4px;
      border-radius: 20px;
    }
    &:nth-child(5) {
      width: 8px;
      height: 11px;
      left: -13px;
      bottom: 8px;
      border-radius: 20px;
      border: none;
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(13),
    &:nth-child(14),
    &:nth-child(15) {
      background: none;
      width: 0;
      height: 0;
      border-color: #ccc transparent;
      border-style: solid;
      border-width: 8px 3px 0;
    }
    &:nth-child(6) {
      left: -9px;
      bottom: 30px;
      transform: rotate(121deg);
    }
    &:nth-child(7) {
      left: -19px;
      bottom: 23px;
      transform: rotate(96deg);
    }
    &:nth-child(8) {
      left: -24px;
      bottom: 14px;
      transform: rotate(96deg);
    }
    &:nth-child(9) {
      left: -25px;
      bottom: 10px;
      transform: rotate(66deg);
    }
    &:nth-child(10) {
      left: -25px;
      bottom: 5px;
      transform: rotate(52deg);
    }
    &:nth-child(11) {
      left: -22px;
      bottom: -5px;
      transform: rotate(33deg);
    }
    &:nth-child(12) {
      left: -13px;
      bottom: -9px;
      transform: rotate(-24deg);
    }
    &:nth-child(13) {
      left: -6px;
      bottom: -7px;
      transform: rotate(-51deg);
    }
    &:nth-child(14) {
      left: -6px;
      bottom: -2px;
      transform: rotate(-46deg);
    }
    &:nth-child(15) {
      left: -7px;
      bottom: 8px;
      transform: rotate(-82deg);
    }
  }
`;

export {
  AreaWrapper,
  CatWrapper,
  HeadWrapper,
  Torso,
  Leg,
  Tail
};
