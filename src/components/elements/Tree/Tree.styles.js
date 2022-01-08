import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 20rem;
  span {
    ${ElementsCommonStyle};
    &:nth-of-type(1) {
      left: 7rem;
      width: .8rem;
      height: 11rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: 5.5rem;
        left: -5.8rem;
        z-index: 3;
        background: #efa5c0;
      }
      &::after {
        bottom: 4.7rem;
        left: -4.4rem;
        z-index: 2;
        background: #da8ca9;
      }
    }
    &:nth-of-type(2) {
      bottom: 4.7rem;
      left: 5.6rem;
      z-index: 2;
      transform: rotate(117deg);
      width: .4rem;
      height: 3rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -2.3rem;
        left: -1.8rem;
        background: #e8b5c8;
      }
      &::after {
        bottom: 3.7rem;
        left: -5.4rem;
        z-index: 2;
        background: #da8ca9;
      }
    }
    &:nth-of-type(3) {
      bottom: 3.7rem;
      left: 8.8rem;
      transform: rotate(-117deg);
      width: .4rem;
      height: 3rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -2.3rem;
        left: -1.8rem;
        background: #e8b5c8;
      }
      &::after {
        bottom: -4.3rem;
        left: -1rem;
        z-index: 2;
        background: #efa5c0;
      }
    }
    &:nth-of-type(4) {
      bottom: 7.7rem;
      left: 8.3rem;
      transform: rotate(-125deg);
      width: .4rem;
      height: 2rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -.5rem;
        left: -3.7rem;
        background: #eabfcf;
      }
      &::after {
        bottom: -2.3rem;
        left: -1rem;
        z-index: 2;
        background: #efa5c0;
      }
    }
    &:nth-of-type(5) {
      bottom: 6.5rem;
      left: 6.3rem;
      transform: rotate(125deg);
      width: .4rem;
      height: 3rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -3.9rem;
        left: -1.4rem;
        z-index: 2;
        background: #da8ca9;
      }
      &::after {
        bottom: -17px;
        left: -19px;
        z-index: 2;
        background: #eabfcf;
      }
    }
    &:nth-of-type(6) {
      bottom: 10.3rem;
      left: 8.3rem;
      transform: rotate(-133deg);
      width: .5rem;
      height: 3rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -1.9rem;
        left: -.4rem;
        z-index: 2;
        background: #efa5c0;
      }
      &::after {
        bottom: -17px;
        left: -19px;
        z-index: 2;
        background: #eabfcf;
      }
    }
    &:nth-of-type(7) {
      bottom: 10.3rem;
      left: 6.3rem;
      transform: rotate(133deg);
      width: .5rem;
      height: 3rem;
      background: #6e471c;
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before {
        bottom: -1.9rem;
        left: -.4rem;
        z-index: 2;
        background: #efa5c0;
      }
      &::after {
        bottom: -17px;
        left: -19px;
        z-index: 2;
        background: #eabfcf;
      }
    }
    &:nth-of-type(8) {
      bottom: 51px;
      left: 44px;
      z-index: 4;
      background: #f3d0dd;
      &,
      &::before,
      &::after {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
      }
      &::before {
        bottom: -1.9rem;
        left: -.4rem;
        z-index: 2;
        background: #efa5c0;
      }
      &::after {
        bottom: -17px;
        left: 29px;
        z-index: 2;
        background: #dcadbe;
      }
    }
    &:nth-of-type(9) {
      bottom: 97px;
      left: 58px;
      z-index: 5;
      background: #f3d0dd;
      &,
      &::before,
      &::after {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      &::before,
      &::after {
        ${ElementsCommonStyle};
        content: '';
      }
      &::before {
        bottom: -1.9rem;
        left: -.4rem;
        z-index: 2;
        background: #efa5c0;
      }
      &::after {
        bottom: 33px;
        left: 2px;
        z-index: 2;
        background: #da8ca9;
      }
    }
  }

  ${(props) => props.isTaller && css`
    span {
      &:nth-of-type(1) {
        left: 7rem;
        width: .8rem;
        height: 13rem;
      }
      &:nth-of-type(9) {
        &::before {
        bottom: 5.1rem;
        }
      }
      &:nth-of-type(6) {
        &::before {
          left: 0.6rem;
          bottom: -2.9rem;
          background: #dcadbe;
        }
      }
    }
  `};

  ${(props) => props.green && css`
    span {
      &:nth-of-type(1) {
        &::before {
          background: #9bee97;
        }
        &::after {
          background: #70dc97;
        }
      }
      &:nth-of-type(2) {
        &::before {
          background: #b7e8b5;
        }
        &::after {
          background: #8cdaa9;
        }
      }
      &:nth-of-type(3) {
        &::before {
          background: #b7e8b5;
        }
        &::after {
          background: #a5efb1;
        }
      }
      &:nth-of-type(4) {
        &::before {
          background: #6cce7c;
        }
        &::after {
          background: #a5efb1;
        }
      }
      &:nth-of-type(5) {
        &::before {
          background: #8cdaa9;
        }
        &::after {
          background: #6cce7c;
        }
      }
      &:nth-of-type(6) {
        &::before {
          background: #a5efb1;
        }
        &::after {
          background: #6cce7c;
        }
      }
      &:nth-of-type(7) {
        &::before {
          background: #a5efb1;
        }
        &::after {
          background: #6cce7c;
        }
      }
      &:nth-of-type(8) {
        background: #84dc91;
        &::before {
          background: #a5efb1;
        }
        &::after {
          background: #91e08c;
        }
      }
      &:nth-of-type(9) {
        background: #84dc91;
        &::before {
          background: #a5efb1;
        }
        &::after {
          background: #7dc787;
        }
      }
    }
  `};
`;

export {
  Wrapper
};
