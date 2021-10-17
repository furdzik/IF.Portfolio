import styled from 'styled-components';
import { ElementsCommonStyle } from '../../../styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 34rem;
  > span {
    ${ElementsCommonStyle};
    &:nth-child(1) {
      height: 12rem;
      width: 100%;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
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
      width: 100%;
      height: 1rem;
      bottom: 12rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
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
    &:nth-child(3) {
      width: 100%;
      height: .3rem;
      bottom: 13rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
      }
      &::before {
        background: #f2f2f2;
      }
      &::after {
        left: 2rem;
        background: #cbcbcb;
      }
    }
    &:nth-child(4) {
      width: 100%;
      height: .3rem;
      bottom: 13.3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        left: -.3rem;
        width: 2.4rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }
    &:nth-child(5) {
      width: 100%;
      height: .3rem;
      bottom: 13.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -.4rem;
        width: 2.5rem;
        height: 100%;
      }
      &::before {
        background: #f2f2f2;
      }
      &::after {
        left: 2rem;
        background: #cbcbcb;
      }
    }
    &:nth-child(6) {
      width: 100%;
      height: .3rem;
      bottom: 13.9rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: .3rem;
        left: -.4rem;
        width: 2.5rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }
    &:nth-child(7) {
      bottom: 14.2rem;
      width: 100%;
      height: 1.4rem;
      span {
        --space: .25rem;
        --start-left: -.45rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        background: #1c5b7a;
        width: var(--width);
        height: .5rem;
        bottom: .45rem;
        left: -.45rem;
        z-index: 2;
        /* TODO: generic */
         &:nth-child(1) {
          left: var(--start-left);
        }
        &:nth-child(2) {
          left: calc(var(--start-left) + var(--width) + var(--space));
        }
        &:nth-child(3) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 2);
        }
        &:nth-child(4) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 3);
        }
        &:nth-child(5) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 4);
        }
        &:nth-child(6) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 5);
        }
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 0;
        width: 2.95rem;
      }
      &::before {
        left: -.9rem;
        border-width: 1.4rem 0 0 .5rem;
        border-style: solid;
        border-color: #f2f2f2 transparent;
      }
      &::after {
        left: 2rem;
        border-width: 1.4rem .5rem 0  0;
        border-style: solid;
        border-color: #cbcbcb transparent;
      }
    }
    &:nth-child(8) {
      width: 100%;
      height: 1rem;
      bottom: 15.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 3.4rem;
        left: -1.2rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }
    &:nth-child(9) {
      bottom: 16.6rem;
      width: 100%;
      height: 1rem;
      span {
        --space: .25rem;
        --start-left: -.45rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        background: #1c5b7a;
        width: var(--width);
        height: .25rem;
        bottom: .45rem;
        left: -.45rem;
        z-index: 2;
        /* TODO: generic */
         &:nth-child(1) {
          left: var(--start-left);
        }
        &:nth-child(2) {
          left: calc(var(--start-left) + var(--width) + var(--space));
        }
        &:nth-child(3) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 2);
        }
        &:nth-child(4) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 3);
        }
        &:nth-child(5) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 4);
        }
        &:nth-child(6) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 5);
        }
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 0;
        width: 2.95rem;
      }
      &::before {
        left: -.9rem;
        border-width: 1rem 0 0 .5rem;
        border-style: solid;
        border-color: #f2f2f2 transparent;
      }
      &::after {
        left: 2rem;
        border-width: 1rem .5rem 0  0;
        border-style: solid;
        border-color: #cbcbcb transparent;
      }
    }
    &:nth-child(10) {
      width: 100%;
      height: 1rem;
      bottom: 17.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 3.4rem;
        left: -1.2rem;
      }
      &::before {
        background: #1c5b7a;
      }
      &::after {
        left: 2rem;
        background: #20475f;
      }
    }
  }
`;

export {
  Wrapper
};
