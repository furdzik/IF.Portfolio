import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 13.3rem;
  height: 25.5rem;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  right: 3.2rem;
  bottom: 2rem;
`;

const FrontSideBlock = styled.span`
  && {
    width: 100%;
    height: 100%;
    span {
      position: static;
      display: block;
      height: .8rem;
      margin: .6rem .2rem;
      background: #3b4e85;
      &:first-of-type {
        background: #c5d928;
      }
    }
  }
`;

const LeftSideBlock = styled.span`
  && {
    position: static;
    overflow: hidden;
    span {
      position: static;
      display: block;
      height: .8rem;
      margin: .6rem 1.2rem .6rem .2rem;
      background: #2e3750;
      &:first-of-type {
        margin-top: 2rem;
      }
    }
  }
`;

export {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
};
