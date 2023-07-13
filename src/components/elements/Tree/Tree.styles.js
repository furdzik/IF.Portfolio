import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 16rem;
  outline: 1px dotted red;

  ${(props) => props.isTaller && css`
    height: 18rem;
  `};

  ${(props) => props.green && css`
  `};
`;

const Trunk = styled.span`
  ${ElementsCommonStyle};
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 116px;
  span {
    ${ElementsCommonStyle};
    &:nth-of-type(1) {
      border-width: 0 5px 69px 5px;
      border-style: solid;
      border-color: #6e471c transparent;
      &::before {
        content: '';
        bottom: -44px;
        left: -3px;
        width: 6px;
        height: 60px;
        background: #6e471c;
      }
      &::after {
        content: '';
        bottom: 15px;
        left: -3px;
        border-width: 0 3px 35px 3px;
        border-style: solid;
        border-color: #6e471c transparent;
      }
    }
  }
`;

const BranchOne = styled.span`

`;

export {
  Wrapper,
  Trunk,
  BranchOne
};
