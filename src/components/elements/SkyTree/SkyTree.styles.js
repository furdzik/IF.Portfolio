import styled from '@emotion/styled';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

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
    &:nth-of-type(1) {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 17rem;
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
        position: relative;
        z-index: 2;
        flex-shrink: 0;
        width: .2rem;
        height: .6rem;
        margin: .4rem .25rem 0 .4rem;
        background: #8f8f8f;
        &:nth-of-type(2n) {
          margin-top: 1.2rem;
          margin-right: .6rem;
        }
        &:nth-of-type(4n + 4) {
          margin-right: 0;
        }
      }
    }
    &:nth-of-type(2) {
      bottom: 17rem;
      width: 100%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(3) {
      bottom: 18rem;
      width: 100%;
      height: .3rem;
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
    &:nth-of-type(4) {
      bottom: 18.3rem;
      width: 100%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -.3rem;
        width: 2.4rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(5) {
      bottom: 18.6rem;
      width: 100%;
      height: .3rem;
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
    &:nth-of-type(6) {
      bottom: 18.9rem;
      width: 100%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -.4rem;
        width: 2.5rem;
        height: .3rem;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(7) {
      bottom: 19.2rem;
      width: 100%;
      height: 1.4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2.95rem;
        height: 0;
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
        bottom: .45rem;
        left: -.45rem;
        z-index: 2;
        width: var(--width);
        height: .5rem;
        background: ${blue};

        /* TODO: generic */
        &:nth-of-type(1) {
          left: var(--start-left);
        }
        &:nth-of-type(2) {
          left: calc(var(--start-left) + var(--width) + var(--space));
        }
        &:nth-of-type(3) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 2);
        }
        &:nth-of-type(4) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 3);
        }
        &:nth-of-type(5) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 4);
        }
        &:nth-of-type(6) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 5);
        }
      }
    }
    &:nth-of-type(8) {
      bottom: 20.6rem;
      width: 100%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -1.2rem;
        width: 3.4rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(9) {
      bottom: 21.6rem;
      width: 100%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2.95rem;
        height: 0;
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
        bottom: .45rem;
        left: -.45rem;
        z-index: 2;
        width: var(--width);
        height: .25rem;
        background: ${blue};

        /* TODO: generic */
        &:nth-of-type(1) {
          left: var(--start-left);
        }
        &:nth-of-type(2) {
          left: calc(var(--start-left) + var(--width) + var(--space));
        }
        &:nth-of-type(3) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 2);
        }
        &:nth-of-type(4) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 3);
        }
        &:nth-of-type(5) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 4);
        }
        &:nth-of-type(6) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 5);
        }
      }
    }
    &:nth-of-type(10) {
      bottom: 22.6rem;
      width: 100%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        left: -1.2rem;
        width: 3.4rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(11) {
      bottom: 23.6rem;
      width: 100%;
      height: .5rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 2rem;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(12) {
      bottom: 24.1rem;
      left: 50%;
      display: flex;
      flex-wrap: wrap;
      transform: translateX(-50%);
      width: 74.5%;
      height: 6rem;
      span {
        ${ElementsCommonStyle};
        position: relative;
        z-index: 2;
        flex-shrink: 0;
        width: .2rem;
        height: .6rem;
        margin: .3rem .1rem 0 .3rem;
        background: #8f8f8f;
        &:nth-of-type(2n) {
          margin-top: 1rem;
          margin-right: .4rem;
        }
        &:nth-of-type(4n + 4) {
          margin-right: 0;
        }
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50% + .1rem);
        height: 100%;
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
    &:nth-of-type(13) {
      bottom: 30.1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 74.5%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 50%;
        height: 100%;
      }
      &::before {
        width: calc(50% + .1rem);
        background: ${blue};
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
