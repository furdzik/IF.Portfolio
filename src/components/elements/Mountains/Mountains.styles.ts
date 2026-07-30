import styled from '@emotion/styled/macro';

import { ElementsCommonStyle } from 'styles/elementsCommonStyle.styles';
import { breakpoints } from 'styles/basic';

const Wrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 19rem;
`;

const GiewontMt = styled.div`
  position: absolute;
  bottom: -6.8rem;
  left: 31%;
  width: 100%;
  height: 100%;
  scale: 0.55;

  span {
    &, &::before, &::after {
      ${ElementsCommonStyle};
    }
    &::before, &::after {
      content: '';
    }
    &:nth-of-type(1) {
      left: 0;
      width: 71rem;
      border-width: 0 28rem 16rem;
      border-style: solid;
      border-color: #b5c7c7 transparent; /* #b1cece // #c0d4d5 */
      &::before {
        top: 31px;
        left: -184px;
        transform: rotate(-19deg);
        width: 14rem;
        border-width: 0 9rem 4rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
      }
      &::after {
        top: 101px;
        left: -298px;
        transform: rotate(-13deg);
        width: 18rem;
        border-width: 0 9rem 6rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
      }
    }
    &:nth-of-type(2) {
      left: 386px;
      width: 312px;
      border-width: 0 14rem 17rem;
      border-style: solid;
      border-color: #b5c7c7 transparent;
      &::before {
        top: 31px;
        left: -184px;
        transform: rotate(-19deg);
        width: 14rem;
        border-width: 0 9rem 4rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
      }
      &::after {
        top: 134px;
        left: -379px;
        transform: rotate(-13deg);
        width: 18rem;
        border-width: 0 9rem 6rem;
        border-style: solid;
        border-color: #b5c7c7 transparent;
      }
    }
    &:nth-of-type(3) {
      bottom: 170px;
      left: 537px;
      width: 1rem;
      height: 1.1rem;
      &::before {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 1.1rem;
        background: #858585;
      }
      &::after {
        top: calc(50% - 1px);
        left: 0;
        transform: translateY(-50%);
        width: 1rem;
        height: 2px;
        background: #858585;
      }
    }
  }

  @media (min-width: ${breakpoints.phablet}) {
    bottom: 0;
    left: 0;
    scale: 1;
  }
`;

const HillOne = styled.div`
  ${ElementsCommonStyle};
  bottom: -18.7rem;
  left: -40px;
  z-index: 4;
  width: 482px;
  height: 241px;
  border-radius: 50% 50% 0 0;
  background: #6fcfa5;
  &::before {
    content: '';
    bottom: -48px;
    left: -63px;
    z-index: 4;
    transform: rotate(-38deg);
    width: 337px;
    height: 250px;
    border-radius: 50%;
    background: #6fcfa5;
  }
`;

const HillTwo = styled.div`
  ${ElementsCommonStyle};
  bottom: -24rem;
  left: 41rem;
  z-index: 4;
  transform: rotate(-4deg);
  width: 592px;
  height: 253px;
  border-radius: 50%;
  background: #6ac58f;

  @media (min-width: ${breakpoints.phablet}) {
    bottom: -20rem;
    left: 34rem;
    transform: rotate(5deg);
  }
`;

const HillThree = styled.div`
  ${ElementsCommonStyle};
  bottom: -67rem;
  left: -47rem;
  z-index: 4;
  width: 1447px;
  height: 733px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(#79d5ad 9%, #91ddc2 51%, #79d4ac 63%);

  @media (min-width: ${breakpoints.phablet}) {
    height: 672px;
  }
`;

const HillFour = styled.div`
  ${ElementsCommonStyle};
  bottom: -10rem;
  left: 26rem;
  z-index: 3;
  display: none;
  width: 360px;
  height: 185px;
  border-radius: 50%;
  background: #94e5b5; /* #75d19a; */

  @media (min-width: ${breakpoints.phablet}) {
    display: block;
  }
`;

export {
  Wrapper,
  GiewontMt,
  HillOne,
  HillTwo,
  HillThree,
  HillFour
};
