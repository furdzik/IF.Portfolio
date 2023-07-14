import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const treeTrunkAndBranchColor = '#6e471c';

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
  ${ElementsCommonStyleUnspecified};
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 116px;

  ${(props) => props.isTaller && css`
    height: 136px;
  `};
`;

const TrunkMain = styled.span`
  ${ElementsCommonStyleUnspecified};
  border-width: 0 5px 69px 5px;
  border-style: solid;
  border-color: #6e471c transparent;

  ${(props) => props.isTaller && css`
    border-bottom-width: 89px;
  `};

  &&::before {
    content: '';
    bottom: -42px;
    left: -3px;
    width: 6px;
    height: 78px;
    background: ${treeTrunkAndBranchColor};

    ${(props) => props.isTaller && css`
      bottom: -55px;
      height: 91px;
    `};
  }
  &&::after {
    content: '';
    bottom: 36px;
    left: -3px;
    border-width: 0 3px 8px 3px;
    border-style: solid;
    border-color: ${treeTrunkAndBranchColor} transparent;
  }
`;

const BranchOne = styled.span`
  ${ElementsCommonStyleUnspecified};
  && {
    bottom: calc(100% - 7px);
    left: calc(50% - 1px);
  }
  transform: rotate(-18deg);
  transform-origin: right;
  span {
    ${ElementsCommonStyleUnspecified};
    &:nth-of-type(1) {
      height: 37px;
      width: 2px;
      background: ${treeTrunkAndBranchColor};
      &::before,
      &::after {
        content: '';
        background: ${treeTrunkAndBranchColor};
        transform-origin: right;
      }
      &::before {
        left: -5px;
        top: -3px;
        transform: rotate(-48deg);
        width: 1px;
        height: 12px;
      }
      &::after {}
    }
  }
`;

export {
  Wrapper,
  Trunk,
  TrunkMain,
  BranchOne
};
