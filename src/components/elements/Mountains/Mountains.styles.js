import styled from 'styled-components';

import { ElementsCommonStyle } from '../../../styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 45rem;
  > span {
    &, &::before, &::after {
      ${ElementsCommonStyle};
    }
    &::before, &::after {
      content: '';
    }
    &:nth-child(1) {
      background: #75d5ab;
      border-radius: 50%;
      bottom: -9rem;
      height: 141px;
      width: 459px;
      left: -44px;
      z-index: 4;
    }
    &:nth-child(2) {
      background: #6ac58f;
      border-radius: 50%;
      bottom: -7rem;
      height: 110px;
      width: 397px;
      left: 33rem;
      z-index: 4;
    }
    &:nth-child(3) {
      //background: #75d19a;
      background: #94e5b5;
      border-radius: 50%;
      bottom: -10rem;
      height: 185px;
      width: 360px;
      left: 26rem;
      z-index: 3;
    }
    &:nth-child(4) {
      border-width: 0 28rem 16rem;
      border-style: solid;
      border-color: #b5c7c7 transparent; // #b1cece // #c0d4d5
      width: 71rem;
      left: 0;
      &::before {
        border-width: 0 9rem 4rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
        width: 14rem;
        left: -184px;
        transform: rotate(-19deg);
        top: 31px;
      }
      &::after {
        border-width: 0 9rem 6rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
        width: 18rem;
        left: -298px;
        transform: rotate(-13deg);
        top: 101px;
      }
    }
    &:nth-child(5) {
      border-width: 0 14rem 17rem;
      border-style: solid;
      border-color: #b5c7c7 transparent;
      width: 312px;
      left: 386px;
      &::before {
        border-width: 0 9rem 4rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
        width: 14rem;
        left: -184px;
        transform: rotate(-19deg);
        top: 31px;
      }
      &::after {
        border-width: 0 9rem 6rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
        width: 18rem;
        left: -379px;
        transform: rotate(-13deg);
        top: 134px;
      }
    }
    &:nth-child(6) {
      width: 1rem;
      height: 1.1rem;
      bottom: 170px;
      left: 537px;
      &::before {
        background: #858585;
        width: 2px;
        height: 1.1rem;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }
      &::after {
        background: #858585;
        width: 1rem;
        height: 2px;
        left: 0;
        top: calc(50% - 1px);
        transform: translateY(-50%);
      }
    }
  }
`;

export {
  Wrapper
};
