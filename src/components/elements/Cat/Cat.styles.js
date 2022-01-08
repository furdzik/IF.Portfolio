import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const CatElement = css`
  bottom: 0;
  border: 1px solid #bebebe;
  background: #cccccc;
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
  bottom: 32px;
  left: 5px;
  z-index: 3;
  width: 80%;
  height: 38px;
  border-radius: 30px;
  span {
    top: 0;
    &:nth-of-type(1),
    &:nth-of-type(2) {
      top: -11px;
      width: 0;
      height: 0;
      border-width: 0 9px 16px;
      border-style: solid;
      border-color: #c2c1c1 transparent;
    }
    &:nth-of-type(1) {
      left: -2px;
      transform: rotate(-31deg);
    }
    &:nth-of-type(2) {
      right: -2px;
      transform: rotate(31deg);
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      top: 15px;
      width: 4px;
      height: 4px;
      border-radius: 5px;
      background: #737373;
    }
    &:nth-of-type(3) {
      left: 10px;
    }
    &:nth-of-type(4) {
      right: 10px;
    }
    &:nth-of-type(5) {
      top: 20px;
      left: 17px;
      width: 6px;
      height: 4px;
      border-radius: 5px;
      background: #3f3f3f;
    }
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9),
    &:nth-of-type(10),
    &:nth-of-type(11) {
      width: 15px;
      height: 1px;
      background: #5e5e5e;
    }
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(8) {
      left: -4px;
    }
    &:nth-of-type(9),
    &:nth-of-type(10),
    &:nth-of-type(11) {
      right: -4px;
    }
    &:nth-of-type(6),
    &:nth-of-type(9) {
      top: 22px;
    }
    &:nth-of-type(7), &:nth-of-type(10) {
      top: 26px;
    }
    &:nth-of-type(8), &:nth-of-type(11) {
      top: 30px;
    }
    &:nth-of-type(6) {
      transform: rotate(13deg);
    }
    &:nth-of-type(7) {
      transform: rotate(0deg);
      margin-left: -1px;
    }
    &:nth-of-type(8) {
      transform: rotate(-13deg);
    }
    &:nth-of-type(9) {
      transform: rotate(-13deg);
    }
    &:nth-of-type(10) {
      transform: rotate(0deg);
      margin-right: -1px;
    }
    &:nth-of-type(11) {
      transform: rotate(13deg);
    }
  }
`;

const Torso = styled.div`
  ${ElementsCommonStyleUnspecified};
  ${CatElement};
  z-index: 1;
  width: 100%;
  height: 50px;
  border-radius: 50px;
`;

const Leg = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  width: 100%;
  height: 60px;

  /* front legs */
  span {
    bottom: 0;
    border-width: 0;
    border-style: solid;
    border-color: #c2c1c1;
    background: #c2c1c1;

    ${(props) => props.front && css`
      z-index: 2;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        bottom: -3px;
        width: 47px;
        height: 50px;
        border-radius: 12px;
        background: none;
      }
      &:nth-of-type(1) {
        left: -22px;
        transform: rotate(10deg);
        border-right-width: 15px;
      }
      &:nth-of-type(2) {
        transform: rotate(-10deg);
        left: 25px;
        border-left-width: 15px;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        bottom: -5px;
        width: 10px;
        height: 8px;
        border-radius: 20px;
      }
      &:nth-of-type(3) {
        left: 4px;
      }
      &:nth-of-type(4) {
        left: 36px;
      }
    `};
  }

  /* hind legs */
  ${(props) => props.hind && css`
    span {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        bottom: 0;
        z-index: 0;
        width: 2.4rem;
        height: 1.2rem;
        border-color: #cccccc;
        border-right-width: 0;
        border-radius: 2rem;
        background: #cccccc;
      }
      &:nth-of-type(1) {
        left: 0;
      }
      &:nth-of-type(2) {
        left: 2.9rem;
      }
    }
  `}
`;

const Tail = styled.div`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  span {
    bottom: 0;
    border: 1px solid #bebebe;
    background: #cccccc;
    &:nth-of-type(1) {
      left: -17px;
      transform: rotate(39deg);
      width: 13px;
      height: 40px;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
    }
    &:nth-of-type(2) {
      bottom: -3px;
      left: -21px;
      transform: rotate(-10deg);
      width: 13px;
      height: 21px;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
    }
    &:nth-of-type(3) {
      bottom: 14px;
      left: -17px;
      transform: rotate(31deg);
      width: 12px;
      height: 12px;
      border: 0;
      border-radius: 40px 0 0 40px / 60px 0 0 60px;
    }
    &:nth-of-type(4) {
      bottom: -4px;
      left: -18px;
      width: 16px;
      height: 16px;
      border: 0;
      border-radius: 20px;
    }
    &:nth-of-type(5) {
      bottom: 8px;
      left: -13px;
      width: 8px;
      height: 11px;
      border: 0;
      border-radius: 20px;
    }
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9),
    &:nth-of-type(10),
    &:nth-of-type(11),
    &:nth-of-type(12),
    &:nth-of-type(13),
    &:nth-of-type(14),
    &:nth-of-type(15) {
      width: 0;
      height: 0;
      border-width: 8px 3px 0;
      border-style: solid;
      border-color: #cccccc transparent;
      background: none;
    }
    &:nth-of-type(6) {
      bottom: 30px;
      left: -9px;
      transform: rotate(121deg);
    }
    &:nth-of-type(7) {
      bottom: 23px;
      left: -19px;
      transform: rotate(96deg);
    }
    &:nth-of-type(8) {
      bottom: 14px;
      left: -24px;
      transform: rotate(96deg);
    }
    &:nth-of-type(9) {
      bottom: 10px;
      left: -25px;
      transform: rotate(66deg);
    }
    &:nth-of-type(10) {
      bottom: 5px;
      left: -25px;
      transform: rotate(52deg);
    }
    &:nth-of-type(11) {
      bottom: -5px;
      left: -22px;
      transform: rotate(33deg);
    }
    &:nth-of-type(12) {
      bottom: -9px;
      left: -13px;
      transform: rotate(-24deg);
    }
    &:nth-of-type(13) {
      bottom: -7px;
      left: -6px;
      transform: rotate(-51deg);
    }
    &:nth-of-type(14) {
      bottom: -2px;
      left: -6px;
      transform: rotate(-46deg);
    }
    &:nth-of-type(15) {
      bottom: 8px;
      left: -7px;
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
