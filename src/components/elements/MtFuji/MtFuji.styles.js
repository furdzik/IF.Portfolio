import styled from '@emotion/styled';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 50rem;
  height: 27rem; /* #2c3543, #202b39 */

  span {
    ${ElementsCommonStyle};
    width: 0;
    height: 0;
  }
  span:nth-of-type(1) {
    width: 50rem;
    border-width: 0 23rem 27rem;
    border-style: solid;
    border-color: #2c3543 transparent;
    &::before {
      ${ElementsCommonStyle};
      content: '';
      position: absolute;
      bottom: -27rem;
      left: -40.5rem;
      display: block;
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
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -1.7rem;
      left: 8.9rem;
      transform: rotate(-45deg);
      border-width: 14rem 1rem 0;
    }
    &::after {
      top: -0.5rem;
      left: -5.3rem;
      transform: rotate(47deg);
      border-width: 13rem 3rem 0;
    }
  }
  span:nth-of-type(3) {
    ${ElementsCommonStyle};
    top: 2rem;
    left: 27.1rem;
    transform: rotate(-42deg);
    border-width: 12rem 3rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -12.6rem;
      left: -5.9rem;
      transform: rotate(48deg);
      border-width: 10rem 3rem 0;
    }
    &::after {
      top: -15rem;
      left: -9rem;
      transform: rotate(68deg);
      border-width: 10rem 3rem 0;
    }
  }
  span:nth-of-type(4) {
    ${ElementsCommonStyle};
    top: 2rem;
    left: 16.1rem;
    transform: rotate(43deg);
    border-width: 12rem 3rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
    &::before {
      top: -8.6rem;
      left: 0.5rem;
      transform: rotate(-8deg);
      border-width: 6rem 2rem 0;
    }
    &::after {
      top: -13.7rem;
      left: 6.5rem;
      transform: rotate(-79deg);
      border-width: 5rem 2rem 0;
    }
  }
  span:nth-of-type(5) {
    ${ElementsCommonStyle};
    top: 4rem;
    left: 29.5rem;
    transform: rotate(-53deg);
    border-width: 7rem 2rem 0;
    border-style: solid;
    border-color: #ffffff transparent;
    &::before {
      ${ElementsCommonStyle};
      content: '';
      top: -10.7rem;
      left: -7.5rem;
      transform: rotate(73deg);
      width: 0;
      height: 0;
      border-width: 6rem 2rem 0;
      border-style: solid;
      border-color: #ffffff transparent;
    }
  }
`;

export {
  Wrapper
};
