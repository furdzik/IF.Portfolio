import styled from '@emotion/styled';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const blue = '#5b6f8d'; // #1c5b7a
const blueShadow = '#52637c'; // #20475f
const gray = '#f2f2f2';
const grayShadow = '#cbcbcb';

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 50rem;
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
        left: -1.6rem;
        width: 3.6rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 50%;
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
        width: 3.75rem;
        height: 0;
      }
      &::before {
        left: -1.6rem;
        border-width: 1rem 0 0 .5rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 50%;
        border-width: 1rem .5rem 0  0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
      span {
        --space: .25rem;
        --start-left: -1.2rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        bottom: .45rem;
        left: -1.2rem;
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
        &:nth-of-type(7) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 6);
        }
        &:nth-of-type(8) {
          left: calc(var(--start-left) + (var(--width) + var(--space)) * 7);
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
        left: -1.7rem;
        width: 3.7rem;
        height: 100%;
      }
      &::before {
        background: ${blue};
      }
      &::after {
        left: 50%;
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
      height: 5rem;
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
      bottom: 29.1rem;
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
    &:nth-of-type(14) {
      bottom: 30.1rem;
      width: 100%;
      height: .7rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 1.8rem;
        height: 0;
      }
      &::before {
        left: .2rem;
        border-width: .7rem 0 0 0.2rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 2rem;
        width: 1.6rem;
        border-width: .7rem .2rem 0 0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
    }
    &:nth-of-type(15) {
      bottom: 30.8rem;
      left: 50%;
      transform: translateX(-50%);
      width: 74.5%;
      height: .6rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50% + .7rem);
        height: 100%;
      }
      &::before {
        left: -.7rem;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(16) {
      bottom: 31.4rem;
      width: 100%;
      height: 1rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 2.5rem;
        height: 0;
      }
      &::before {
        left: -.5rem;
        border-width: 1rem 0 0 .2rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 2rem;
        border-width: 1rem .2rem 0  0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
      span {
        --space: .4rem;
        --start-left: .1rem;
        --width: .6rem;

        ${ElementsCommonStyle};
        bottom: .45rem;
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
          left: calc(var(--space) + var(--start-left) + (var(--width) + var(--space)) * 2);
        }
        &:nth-of-type(4) {
          left: calc(var(--space) + var(--start-left) + (var(--width) + var(--space)) * 3);
        }
      }
    }
    &:nth-of-type(17) {
      bottom: 32.4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 74.5%;
      height: .7rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50% + 1.5rem);
        height: 100%;
      }
      &::before {
        left: -1.5rem;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(18) {
      bottom: 33.1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 74.5%;
      height: .5rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(19) {
      bottom: 33.6rem;
      left: 50%;
      display: flex;
      flex-wrap: wrap;
      transform: translateX(-50%);
      width: 60.5%;
      height: 3rem;
      span {
        ${ElementsCommonStyle};
        position: relative;
        z-index: 2;
        flex-shrink: 0;
        width: .2rem;
        height: .6rem;
        margin: .3rem .2rem 0 .3rem;
        background: #8f8f8f;
        &:nth-of-type(2n) {
          margin-top: 1.2rem;
          margin-left: .1rem;
        }
        &:nth-of-type(4) {
          margin-right: 0;
        }
        &:nth-of-type(6) {
          margin-top: .3rem;
          margin-right: 0;
          margin-left: .9rem;
        }
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
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
    &:nth-of-type(20) {
      bottom: 36.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 74.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(21) {
      bottom: 37rem;
      left: 50%;
      display: flex;
      flex-wrap: wrap;
      transform: translateX(-50%);
      width: 22.5%;
      height: 4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
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
    &:nth-of-type(22) {
      bottom: 41rem;
      left: 50%;
      transform: translateX(-50%);
      width: 42.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(23) {
      bottom: 41.4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 42.5%;
      height: .7rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: .8rem;
        height: 0;
      }
      &::before {
        left: .1rem;
        border-width: .7rem 0 0 0.2rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 50%;
        border-width: .7rem .2rem 0 0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
    }
    &:nth-of-type(24) {
      bottom: 42.1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 42.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(25) {
      bottom: 42.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 42.5%;
      height: 1.3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: .9rem;
        height: 0;
      }
      &::before {
        left: 0;
        border-width: 0 0 1.3rem .3rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 50%;
        border-width:  0 .3rem 1.3rem 0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
    }
    &:nth-of-type(26) {
      bottom: 43.8rem;
      left: 50%;
      transform: translateX(-50%);
      width: 35.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(27) {
      bottom: 44.2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 35.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: .6rem;
        height: 0;
      }
      &::before {
        left: .1rem;
        border-width: 0 0 .4rem .1rem;
        border-style: solid;
        border-color: ${gray} transparent;
      }
      &::after {
        left: 50%;
        border-width:  0 .1rem .4rem 0;
        border-style: solid;
        border-color: ${grayShadow} transparent;
      }
    }
    &:nth-of-type(28) {
      bottom: 44.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 30.5%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(29) {
      bottom: 44.9rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .7rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(30) {
      bottom: 45.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(31) {
      bottom: 45.9rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(32) {
      bottom: 46.3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(33) {
      bottom: 46.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(34) {
      bottom: 47rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(35) {
      bottom: 47.3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(36) {
      bottom: 47.7rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .3rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(37) {
      bottom: 48rem;
      left: 50%;
      transform: translateX(-50%);
      width: 21.5%;
      height: .4rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(38) {
      bottom: 48.4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 28.5%;
      height: .5rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
    &:nth-of-type(39) {
      bottom: 48.9rem;
      left: 50%;
      transform: translateX(-50%);
      width: 28.5%;
      height: .5rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${gray};
      }
      &::after {
        left: 50%;
        background: ${grayShadow};
      }
    }
    &:nth-of-type(40) {
      bottom: 49.4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 28.5%;
      height: .5rem;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: calc(50%);
        height: 100%;
      }
      &::before {
        left: 0;
        background: ${blue};
      }
      &::after {
        left: 50%;
        background: ${blueShadow};
      }
    }
  }
`;

export {
  Wrapper
};
