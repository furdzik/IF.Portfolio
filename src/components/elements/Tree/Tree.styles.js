import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 20rem;
  z-index: 1;
  span {
    ${ElementsCommonStyle};
    &:nth-of-type(1) {
    background: #6e471c;
    width: .8rem;
    height: 11rem;
    left: 7rem;
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      background: #efa5c0;
      left: -5.8rem;
      bottom: 5.5rem;
      z-index: 3;
    }
    &::after {
      background: #da8ca9;
      left: -4.4rem;
      bottom: 4.7rem;
      z-index: 2;
    }
    }
    &:nth-of-type(2) {
    background: #6e471c;
    width: .4rem;
    height: 3rem;
    left: 5.6rem;
    bottom: 4.7rem;
    z-index: 2;
    transform: rotate(117deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      background: #e8b5c8;
      left: -1.8rem;
      bottom: -2.3rem;
    }
    &::after {
      background: #da8ca9;
      left: -5.4rem;
      bottom: 3.7rem;
      z-index: 2;
    }
    }
    &:nth-of-type(3) {
    background: #6e471c;
    width: .4rem;
    height: 3rem;
    left: 8.8rem;
    bottom: 3.7rem;
    transform: rotate(-117deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      background: #e8b5c8;
      left: -1.8rem;
      bottom: -2.3rem;
    }
    &::after {
      background: #efa5c0;
      left: -1rem;
      bottom: -4.3rem;
      z-index: 2;
    }
    }
    &:nth-of-type(4) {
    background: #6e471c;
    width: .4rem;
    height: 2rem;
    left: 8.3rem;
    bottom: 7.7rem;
    transform: rotate(-125deg);
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
      left: -1rem;
      bottom: -2.3rem;
      z-index: 2;
      background: #efa5c0;
    }
    }
    &:nth-of-type(5) {
    background: #6e471c;
    width: .4rem;
    height: 3rem;
    left: 6.3rem;
    bottom: 6.5rem;
    transform: rotate(125deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      left: -1.4rem;
      bottom: -3.9rem;
      z-index: 2;
      background: #da8ca9;
    }
    &::after {
      left: -19px;
      bottom: -17px;
      z-index: 2;
      background: #eabfcf;
    }
    }
    &:nth-of-type(6) {
    background: #6e471c;
    width: .5rem;
    height: 3rem;
    left: 8.3rem;
    bottom: 10.3rem;
    transform: rotate(-133deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      left: -.4rem;
      bottom: -1.9rem;
      z-index: 2;
      background: #efa5c0;
    }
    &::after {
      left: -19px;
      bottom: -17px;
      z-index: 2;
      background: #eabfcf;
    }
    }
    &:nth-of-type(7) {
    background: #6e471c;
    width: .5rem;
    height: 3rem;
    left: 6.3rem;
    bottom: 10.3rem;
    transform: rotate(133deg);
    &::before,
    &::after {
      ${ElementsCommonStyle};
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    &::before {
      left: -.4rem;
      bottom: -1.9rem;
      z-index: 2;
      background: #efa5c0;
    }
    &::after {
      left: -19px;
      bottom: -17px;
      z-index: 2;
      background: #eabfcf;
    }
    }
    &:nth-of-type(8) {
    background: #f3d0dd;
    left: 44px;
    bottom: 51px;
    z-index: 4;
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
      left: -.4rem;
      bottom: -1.9rem;
      z-index: 2;
      background: #efa5c0;
    }
    &::after {
      left: 29px;
      bottom: -17px;
      z-index: 2;
      background: #dcadbe;
    }
    }
    &:nth-of-type(9) {
    background: #f3d0dd;
    left: 58px;
    bottom: 97px;
    z-index: 5;
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
      left: -.4rem;
      bottom: -1.9rem;
      z-index: 2;
      background: #efa5c0;
    }
    &::after {
      left: 2px;
      bottom: 33px;
      z-index: 2;
      background: #da8ca9;
    }
    }
  }

  ${(props) => props.isTaller && css`
    span {
      &:nth-of-type(1) {
      width: .8rem;
      height: 13rem;
      left: 7rem;
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
