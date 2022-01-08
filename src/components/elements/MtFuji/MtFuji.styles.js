import styled from '@emotion/styled';

import { ElementsCommonStyle } from '../../../styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 50rem;
  height: 27rem;
  /* #2c3543, #202b39 */
  span {
    ${ElementsCommonStyle};
    height: 0;
    width: 0;
  }
  span:nth-of-type(1) {
    border-width: 0 23rem 27rem;
    border-style: solid;
    border-color: #2c3543 transparent;
    width: 50rem;
    &::before {
      ${ElementsCommonStyle};
      content: '';
      display: block;
      position: absolute;
      bottom: -27rem;
      left: -40.5rem;
      width: 75rem;
      border-width: 0 40rem 21rem;
      border-style: solid;
      border-color: #2c3543 transparent;
    }
  }
  span:nth-of-type(2) {
    top: 0;
    left: 16.7rem;
    width: 15rem;
    border-width: 0 4.5rem 8rem;
    border-style: solid;
    border-color: #ffffff transparent;
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      height: 0;
      width: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -1.7rem;
      left: 8.9rem;
      border-width: 14rem 1rem 0;
      transform: rotate(-45deg);
    }
    &::after {
      top: -0.5rem;
      left: -5.3rem;
      border-width: 13rem 3rem 0;
      transform: rotate(47deg);
    }
  }
  span:nth-of-type(3) {
    ${ElementsCommonStyle};
    top: 2rem;
    left: 27.1rem;
    border-width: 12rem 3rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    transform: rotate(-42deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      height: 0;
      width: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -12.6rem;
      left: -5.9rem;
      border-width: 10rem 3rem 0;
      transform: rotate(48deg);
    }
    &::after {
      top: -15rem;
      left: -9rem;
      border-width: 10rem 3rem 0;
      transform: rotate(68deg);
    }
  }
  span:nth-of-type(4) {
    ${ElementsCommonStyle};
    top: 2rem;
    left: 16.1rem;
    border-width: 12rem 3rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    transform: rotate(43deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      height: 0;
      width: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -8.6rem;
      left: 0.5rem;
      border-width: 6rem 2rem 0;
      transform: rotate(-8deg);
    }
    &::after {
      top: -13.7rem;
      left: 6.5rem;
      border-width: 5rem 2rem 0;
      transform: rotate(-79deg);
    }
  }
  span:nth-of-type(5) {
    ${ElementsCommonStyle};
    top: 4rem;
    left: 29.5rem;
    border-width: 7rem 2rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    transform: rotate(-53deg);
    &::before {
      ${ElementsCommonStyle};
      content: '';
      top: -10.7rem;
      left: -7.5rem;
      height: 0;
      width: 0;
      border-style: solid;
      border-color: #ffffff transparent;
      border-width: 6rem 2rem 0;
      transform: rotate(73deg);
    }
  }
`;

export {
  Wrapper
};
