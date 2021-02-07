import styled from 'styled-components';
import { ElementsCommonStyle } from '../../../styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 34rem;
  span {
    ${ElementsCommonStyle};
    &:nth-child(1) {
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 12rem;
      }
      &::before {
        background: #f2f2f2;
      }
      &::after {
        left: 2rem;
        background: #cbcbcb;
      }
    }
    &:nth-child(2) {
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 1rem;
        bottom: 12rem;
        width: 2rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }
    &:nth-child(2) {
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 1rem;
        bottom: 12rem;
        width: 2rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }

    // #1c5b7a, #20475f
  }
`;

export {
  Wrapper
};
