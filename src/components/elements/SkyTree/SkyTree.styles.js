import styled from 'styled-components';

import { ElementsCommonStyle } from '../../../styles/elementsCommonStyle.styles';

const blue = '#1c5b7a';
const blueShadow = '#20475f';
const gray = '#f2f2f2';
const grayShadow = '#cbcbcb';

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 45rem;
  > span {
    ${ElementsCommonStyle};
    &:nth-child(1) {
      display: flex;
      flex-wrap: wrap;
      height: 17rem;
      width: 100%;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
      }
      &::before {
        background: ${gray};
      }
      &::after {
        left: 2rem;
        background: ${grayShadow};
      }
      span {
        ${ElementsCommonStyle};
        flex-shrink: 0;
        position: relative;
        background: #8f8f8f;
        width: .2rem;
        height: .6rem;
        margin: .4rem .25rem 0 .4rem;
        z-index: 2;
        &:nth-child(2n) {
          margin-top: 1.2rem;
          margin-right: .6rem;
        }
        &:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
    }
    &:nth-child(2) {
      width: 100%;
      height: 1rem;
      bottom: 17rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 2rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(3) {
      width: 100%;
      height: .3rem;
      bottom: 18rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
      }
      &::before {
        background: ${gray};
      }
      &::after {
        left: 2rem;
        background: ${grayShadow};
      }
    }
    &:nth-child(4) {
      width: 100%;
      height: .3rem;
      bottom: 18.3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        left: -.3rem;
        width: 2.4rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(5) {
      width: 100%;
      height: .3rem;
      bottom: 18.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -.4rem;
        width: 2.5rem;
        height: 100%;
      }
      &::before {
        background: ${gray};
      }
      &::after {
        left: 2rem;
        background: ${grayShadow};
      }
    }
    &:nth-child(6) {
      width: 100%;
      height: .3rem;
      bottom: 18.9rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: .3rem;
        left: -.4rem;
        width: 2.5rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(7) {
      width: 100%;
      height: 1.4rem;
      bottom: 19.2rem;
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
        border-color: ${gray} transparent;
      }
      &::after {
        left: 2rem;
        border-width: 1.4rem .5rem 0  0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
      span {
        --space: .25rem;
        --start-left: -.45rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        background: ${blue};
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
    }
    &:nth-child(8) {
      width: 100%;
      height: 1rem;
      bottom: 20.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 3.4rem;
        left: -1.2rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(9) {
      bottom: 21.6rem;
      width: 100%;
      height: 1rem;
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
        border-color: ${gray} transparent;
      }
      &::after {
        left: 2rem;
        border-width: 1rem .5rem 0  0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
      span {
        --space: .25rem;
        --start-left: -.45rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        background: ${blue};
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
    }
    &:nth-child(10) {
      width: 100%;
      height: 1rem;
      bottom: 22.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 3.4rem;
        left: -1.2rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(11) {
      width: 100%;
      height: .5rem;
      bottom: 23.6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 2rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-child(12) {
      display: flex;
      flex-wrap: wrap;
      width: 74.5%;
      height: 6rem;
      left: 50%;
      transform: translateX(-50%);
      bottom: 24.1rem;
      span {
        ${ElementsCommonStyle};
        flex-shrink: 0;
        position: relative;
        background: #8f8f8f;
        width: .2rem;
        height: .6rem;
        margin: .3rem .1rem 0 .3rem;
        z-index: 2;
        &:nth-child(2n) {
          margin-top: 1rem;
          margin-right: .4rem;
        }
        &:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: calc(50% + .1rem);
      }
      &::before {
        background: ${gray};
      }
      &::after {
        left: 50%;
        width: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-child(13) {
      width: 74.5%;
      left: 50%;
      transform: translateX(-50%);
      height: 1rem;
      bottom: 30.1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        height: 100%;
        width: 50%;
      }
      &::before {
        background: ${blue};
        width: calc(50% + .1rem);
      }
      &::after {
        left: 50%;
        width: 50%;
        background: ${blueShadow};
      }
    }
  }
`;

export {
  Wrapper
};
